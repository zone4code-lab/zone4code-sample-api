import objection from 'objection';
import Product from './product';
import Type from './type';
const { Model } = objection;

class Size extends Model {
  static get tableName() {
    return 'sizes';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        size: { type: 'string' },
      },
    };
  }

  static get relationMappings() {
    // const Type = require('./type');
    return {
      products: {
        relation: Model.ManyToManyRelation,
        modelClass: Product,
        join: {
          from: 'sizes.id',
          through: {
            from: 'product_size.size_id',
            to: 'product_size.product_id',
          },
          to: 'products.id',
        },
      },
      types: {
        relation: Model.ManyToManyRelation,
        modelClass: Type,
        join: {
          from: 'size.id',
          through: {
            from: 'price.size_id',
            to: 'price.type_id'
          },
          to: 'type.id'
        }
      }
    };
  }
}

// eslint-disable-next-line import/prefer-default-export
export default Size;
