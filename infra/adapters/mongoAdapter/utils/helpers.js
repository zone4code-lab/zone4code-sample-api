import path from 'path';
import * as Models from '../schema';
import { ServerError, ValidationError } from '../../../../domain/utils/Errors';

export const cleanProperties = (data) => {
  if (data.listId && data.html5InputType && data.fieldCategory && data.type) {
    delete data.listId.required;
    delete data.html5InputType;
    delete data.fieldCategory;
    delete data.type;
    // delete data.description;
  }
  delete data.updatedAt;
  delete data.createdAt;
  // delete data.translate;
  // delete data.parent;
  // delete data._id;
  // console.log('type of description  : ', typeof data.description.type);
  return data;
};

// eslint-disable-next-line no-underscore-dangle
export const dirname = path.resolve();

export const checkListExistOnUpdate = async (id, data) => {
  const list = await Models.ListModel.find({ $and: [{ name: data }, { _id: { $ne: id } }, { deleted: false }] });
  if (list.length > 0) {
    throw new ServerError({
      code: 'List was not created ',
      message: 'List already exist',
      debugMessage: '[List] Error in addList service.',
      error: 'List already exist, change the name !',
      data: {
        details: 'List service not working',
      },
    });
  }
};

export const checkListExist = async (data) => {
  const list = await Models.ListModel.findOne({ name: data, deleted: false });
  if (list) {
    throw new ServerError({
      code: 'List was not created ',
      message: 'List already exist',
      debugMessage: '[List] Error in addList service.',
      error: 'List already exist, change the name !',
      data: {
        details: 'List service not working',
      },
    });
  }
};

export const checkFieldExistOnUpdate = async (id, data) => {
  // TODOApply this logics to list !!!
  const fields = await Models.FieldModel.find({ $and: [{ name: data }, { _id: { $ne: id } }, { deleted: false }] });

  if (fields.length > 0) {
    throw new ServerError({
      code: 'Field was not created ',
      message: 'Field already exist',
      debugMessage: '[Field] Error in addField service.',
      error: 'Field already exist, change the name !',
      data: {
        details: 'Field service not working',
      },
    });
  }
};

export const checkFieldExist = async (data, reference) => {
  const field = await Models.StepModel.findOne({ name: data, reference, deleted: false });

  if (field) {
    throw new ServerError({
      code: 'Field was not created ',
      message: 'Field already exist',
      debugMessage: '[Field] Error in addField service.',
      error: 'Field already exist, change the name !',
      data: {
        details: 'Field service not working',
      },
    });
  }
};

export const checkStepExistOnUpdate = async (id, data) => {
  // TODOApply this logics to list !!!
  const step = await Models.StepModel.find({ $and: [{ name: data }, { _id: { $ne: id } }, { deleted: false }] });

  if (step.length > 0) {
    throw new ServerError({
      code: 'Field was not created ',
      message: 'Field already exist',
      debugMessage: '[Field] Error in addField service.',
      error: 'Field already exist, change the name !',
      data: {
        details: 'Field service not working',
      },
    });
  }
};

export const checkStepExist = async (data) => {
  // put trim
  const step = await Models.StepModel.findOne({ name: data, deleted: false });

  if (step) {
    throw new ServerError({
      code: 'Field was not created ',
      message: 'Field already exist',
      debugMessage: '[Field] Error in addField service.',
      error: 'Field already exist, change the name !',
      data: {
        details: 'Field service not working',
      },
    });
  }
};

export const checkWorkflowExist = async (data) => {
  // put trim
  const workFlow = await Models.WorkflowModel.findOne({ name: data, deleted: false });

  if (workFlow) {
    throw new ServerError({
      code: 'workFlow name exist on create ',
      message: 'workFlow already exist',
      debugMessage: '[workFlow] Error in addWorkFlow service.',
      error: 'workFlow already exist, change the name !',
      data: {
        details: 'workFlow service not working',
      },
    });
  }
};

export const checkWorkflowExistOnUpdate = async (id, data) => {
  // TODOApply this logics to list !!!
  const workFlow = await Models.WorkflowModel.find({ $and: [{ name: data }, { _id: { $ne: id } }, { deleted: false }] });

  if (workFlow.length > 0) {
    throw new ServerError({
      code: 'workFlow name exist on update ',
      message: 'workFlow already exist',
      debugMessage: '[workFlow] Error in update service.',
      error: 'workFlow already exist, change the name !',
      data: {
        details: 'workFlow service not working',
      },
    });
  }
};

export const getSkipAndLimit = (pageParam, limitParam) => {
  // TODO change variables name
  // eslint-disable-next-line radix
  const page = Number.parseInt(pageParam, 10);
  // eslint-disable-next-line radix
  const limit = Number.parseInt(limitParam, 10);
  if (Number.isNaN(page) || Number.isNaN(limit)) {
    return new ValidationError({
      name: 'list',
      status: 400,
      code: 'invalid_get_list_byID',
      message: `Invalid get list ${JSON.stringify('test')}`,
      debugMessage: '[LIST] Error in getListByID.',
      error: 'test',
    });
  }
  return { page, limit };
};

export const paginateByModel = async (modelName, page, limit) => {
  const list = await Models[modelName]
    .find({ deleted: false })
    .sort({ createdAt: -1 })
    .limit(limit * 1)
    .skip((page - 1) * limit);

  const countDocument = await Models[modelName].find({ deleted: false }).countDocuments();
  const pages = Math.ceil(countDocument / limit);

  return {
    pages,
    countDocument,
    list,
  };
};

const spreadData = (el, elementKey, lang) => {
  let newData = {};
  if (el.translate[lang] && el.translate[lang][elementKey]) {
    // eslint-disable-next-line no-underscore-dangle
    newData = { ...el._doc, [elementKey]: el.translate[lang][elementKey] };
  }

  return newData;
};

export const formatLanguage = (data, lang) => {
  if (Array.isArray(data) && data.length > 0) {
    return data.map((el, index) => {
      const newObject = data[index] && data[index].translate && data[index].translate;
      if (!newObject || newObject[lang] == null) return { err: 'translate object not found' };
      // eslint-disable-next-line no-prototype-builtins
      if (newObject && newObject.hasOwnProperty(lang) && newObject[lang] !== null) {
        let newSata = {};
        if (typeof newObject[lang] !== 'object') return { err: 'type of object translate is unformal' };
        const keys = Object.keys(newObject[lang] && newObject[lang]);
        keys.forEach((elementKey) => {
          const dataNewSata = spreadData(el, elementKey, lang);
          newSata = { ...dataNewSata, ...newSata };
        });
        return newSata;
      }
      return { err: 'lang not supported' };
    });
  }

  if (typeof data === 'object') {
    const newObject = data && data.translate && data.translate;
    // eslint-disable-next-line no-prototype-builtins
    if (newObject && newObject.hasOwnProperty(lang)) {
      let newSata = {};
      const keys = Object.keys(newObject[lang]);
      const lest = [data].map((el) => {
        keys.forEach((elementKey) => {
          const dataNewSata = spreadData(el, elementKey, lang);
          newSata = { ...dataNewSata, ...newSata };
        });
        return newSata;
      });
      return lest;
    }
    return { err: 'lang not supported' };
  }
  return [];
};

export const listMonths = [
  {
    id: 0,
    name: 'none',
    shortName: 'none',
  },
  {
    id: 1,
    name: 'January',
    shortName: 'jan',
  },

  {
    id: 2,
    name: 'February',
    shortName: 'feb',
  },

  {
    id: 3,
    name: 'March',
    shortName: 'mar',
  },

  {
    id: 4,
    name: 'April',
    shortName: 'apr',
  },

  {
    id: 5,
    name: 'May',
    shortName: 'may',
  },

  {
    id: 6,
    name: 'June',
    shortName: 'jun',
  },

  {
    id: 7,
    name: 'July',
    shortName: 'jul',
  },

  {
    id: 8,
    name: 'August',
    shortName: 'aug',
  },

  {
    id: 9,
    name: 'September',
    shortName: 'sep',
  },

  {
    id: 10,
    name: 'October',
    shortName: 'oct',
  },

  {
    id: 11,
    name: 'November',
    shortName: 'nov',
  },

  {
    id: 12,
    name: 'December',
    shortName: 'dec',
  },
];

export const urlHoliday = 'https://jours-feries-france.antoine-augusti.fr/api/2022';

export default { urlHoliday, listMonths, cleanProperties, checkListExist, getSkipAndLimit, paginateByModel, formatLanguage, checkFieldExistOnUpdate, checkFieldExist, dirname };

/* 
  fastify.use(function (req, res, next) {
    console.log('middy');
    req.data = { hello: 'world' };
    next();
  });
*/
