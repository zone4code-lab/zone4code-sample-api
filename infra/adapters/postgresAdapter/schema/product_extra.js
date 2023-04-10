import objection from 'objection';
import Product from './product';
import Extra from './extra';
const { Model } = objection;

class Product_extra extends Model{
  static get tableName() {
    return 'product_extra';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        product_id: { type: 'integer' },
        extra_id: { type: ['integer', 'null']},
      },
    };
  }

  static get relationMappings() {
    // Importing models here is one way to avoid require loops.
    return {
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Product,
        join: {
          from: 'product_extra.product_id',
          to: 'products.id'
        }
      },
      extra: {
        relation: Model.BelongsToOneRelation,
        modelClass: Extra,
        join: {
          from: 'product_extra.extra_id',
          to: 'extras.id'
        }
      }
    };
  }
}

// eslint-disable-next-line import/prefer-default-export
export default Product_extra;
