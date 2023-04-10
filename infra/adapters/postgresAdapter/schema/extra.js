import objection from 'objection';
import Product from './product';
const { Model } = objection;

class Extra extends Model{
  static get tableName() {
    return 'extras';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        extra: { type: 'string' },
        price: { type: 'number' },
      },
    };
  }

  static get relationMappings() {
    // Importing models here is one way to avoid require loops.
    return {
      products: {
        relation: Model.ManyToManyRelation,
        modelClass: Product,
        join: {
          from: 'extras.id',
          through: {
            from: 'product_extra.extra_id',
            to: 'product_extra.product_id',
          },
          to: 'products.id',
        },
      },
    };
  }
}

// eslint-disable-next-line import/prefer-default-export
export default Extra;
