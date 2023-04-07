import objection from 'objection';
import Type from './type';
const { Model } = objection;

class Color extends Model{
  static get tableName() {
    return 'colors';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        color: { type: 'string' },
        type_id: { type: 'integer' },
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
          from: 'colors.type_id',
          to: 'types.id'
        }
    }
  }
}
}

// eslint-disable-next-line import/prefer-default-export
export default Color;
