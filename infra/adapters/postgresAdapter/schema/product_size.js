import objection from 'objection';
import Product from './product';
import Size from './size';
const { Model } = objection;

class Product_size extends Model{
  static get tableName() {
    return 'product_size';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        size_id: { type: ['integer', 'null'] },
        product_id: { type: 'integer' },
      },
    };
  }

  static get relationMappings(){
    return {
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Product,
        join: {
          from: 'product_size.product_id',
          to: 'products.id'
        }
      },
      size: {
        relation: Model.BelongsToOneRelation,
        modelClass: Size,
        join: {
          from: 'product_size.size_id',
          to: 'sizes.id'
        }
      }
    };
  }
}

// eslint-disable-next-line import/prefer-default-export
export default Product_size;
