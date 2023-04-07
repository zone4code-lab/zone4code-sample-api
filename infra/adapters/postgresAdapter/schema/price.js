import objection from 'objection';
import Type from './type';
import Size from './size';
const { Model } = objection;

class Price extends Model{
  static get tableName() {
    return 'price';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      // required: [],
      properties: {
        type_id: { type: 'integer' },
        size_id: { type: 'integer' },
        price: { type: 'number' },
      },
    };
  }

  static get relationMappings() {
    return {
      type: {
        relation: Model.BelongsToOneRelation,
        modelClass: Type,
        join: {
          from: 'price.type_id',
          to: 'types.id'
        }
      },
      size: {
        relation: Model.BelongsToOneRelation,
        modelClass: Size,
        join: {
          from: 'price.size_id',
          to: 'sizes.id'
        }
      }
    };
  }
}

// eslint-disable-next-line import/prefer-default-export
export default Price;
