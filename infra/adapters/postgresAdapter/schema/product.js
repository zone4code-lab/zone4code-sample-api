import objection from 'objection';
const { Model } = objection;

class Product extends Model{
  static get tableName() {
    return 'product';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      // required: [],
      properties: {
        name: { type: 'string' },
        description: { type: 'string' },
      },
    };
  }

  static get relationMappings() {
    // Importing models here is one way to avoid require loops.
    return {
      // Add any required relation mappings here
    };
  }
}

export default Product;
