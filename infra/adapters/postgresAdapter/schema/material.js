import objection from 'objection';
import Type from './type';
const { Model } = objection;

class Material extends Model{
  static get tableName() {
    return 'materials';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        type_id: { type: 'integer' },
        composition: { type: 'string' },
      },
    };
  }

  static get relationMappings() {
    // Importing models here is one way to avoid require loops.
    return {
      type: {
        relation: Model.BelongsToOneRelation,
        modelClass: Type,
        join: {
          from: 'materials.type_id',
          to: 'types.id'
        }
    }
    };
  }
}

// eslint-disable-next-line import/prefer-default-export
export default Material;
