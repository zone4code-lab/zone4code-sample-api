import objection from 'objection';
import Type from './type';
import Order from './order';
const { Model } = objection;

class Order_item extends Model {
  static get tableName() {
    return 'order_item';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      // required: [],
      properties: {
        order_id: { type: 'integer' },
        type_id: { type: 'integer' },
        size_id: { type: 'integer' },
        color_id: { type: 'integer' },
        extras_id: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
            },
            required: ['id'],
          },
        },
        quantity: { type: 'integer' },
        price: { type: 'number' },
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
          from: 'order_item.type_id',
          to: 'types.id',
        },
      },
      order: {
        relation: Model.BelongsToOneRelation,
        modelClass: Order,
        join: {
          from: 'order_item.order_id',
          to: 'orders.id',
        },
      },
    };
  }
}

// eslint-disable-next-line import/prefer-default-export
export default Order_item;
