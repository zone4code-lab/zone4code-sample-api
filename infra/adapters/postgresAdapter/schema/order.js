import objection from 'objection';
const { Model } = objection;

class Order extends Model {
  static get tableName() {
    return 'orders';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        customer_id: { type: 'string' },
        tax: { type: ['string', 'null'] },
        shipping: { type: ['string', 'null']  },
        total: { type: 'number' },
        status: { type: 'string' },
        name: { type: ['string', 'null'] },
      },
    };
  }

  static get relationMappings() {
    // Importing models here is one way to avoid require loops.
    return {
      products: {
        relation: Model.ManyToManyRelation,
        modelClass: Order,
        join: {
          from: 'orders.id',
          through: {
            from: 'order_item.order_id',
            to: 'order_item.type_id',
          },
          to: 'types.id',
        },
      },
    };
  }
}

// eslint-disable-next-line import/prefer-default-export
export default Order;
