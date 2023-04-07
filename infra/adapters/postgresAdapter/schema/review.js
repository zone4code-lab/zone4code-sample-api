import objection from 'objection';
import Type from './type';
const { Model } = objection;

class Review extends Model{
  static get tableName() {
    return 'reviews';
  }
  
  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        type_id: { type: 'integer' },
        customer_id: { type: 'string' },
        rating:{type: 'string'},
        comment:{type: 'string'},
        images:{type: 'json'},
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
          from: 'reviews.type_id',
          to: 'types.id'
        }
    }
    };
  }
}

// eslint-disable-next-line import/prefer-default-export
export default Review;
