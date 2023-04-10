import objection from 'objection';
import Product from './product';
import Size from './size';
import Color from './color';
import Review from './review';
import Material from './material';
import Order from './order';
const { Model } = objection;

class Type extends Model{
  static get tableName() {
    return 'types';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        name: { type: 'string' },
        description: { type: 'string' },
        image: { type: 'string' },
        product_id: { type: 'integer' },
      },
    };
  }

  static get relationMappings() {
    return {
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Product,
        join: {
          from: 'types.product_id',
          to: 'products.id'
        }
      },
      colors: {
        relation: Model.HasManyRelation,
        modelClass: Color,
        join: {
          from: 'types.id',
          to: 'colors.type_id',
        },
      },
      materials: {
        relation: Model.HasManyRelation,
        modelClass: Material,
        join: {
          from: 'types.id',
          to: 'materials.type_id',
        },
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: 'types.id',
          to: 'reviews.type_id',
        },
      },
      sizes: {
        relation: Model.ManyToManyRelation,
        modelClass: Size,
        join: {
          from: 'types.id',
          through: {
            from: 'price.type_id',
            to: 'price.size_id'
          },
          to: 'sizes.id'
        }
      },
      orders: {
        relation: Model.ManyToManyRelation,
        modelClass: Order,
        join: {
          from: 'types.id',
          through: {
            from: 'order_item.type_id',
            to: 'order_item.order_id'
          },
          to: 'orders.id'
        }
      }
    };
  }
}

// eslint-disable-next-line import/prefer-default-export
export default Type;
