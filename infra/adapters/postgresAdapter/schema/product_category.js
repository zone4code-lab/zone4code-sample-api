import objection from 'objection';
import Product from './product';
import Category from './category';
const { Model } = objection;

class Product_category extends Model{
  static get tableName() {
    return 'product_category';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        product_id: { type: ['integer', 'null']},
        category_id: { type: 'integer' },
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
          from: 'product_category.product_id',
          to: 'products.id'
        }
      },
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: 'product_category.category_id',
          to: 'categories.id'
        }
      }
    };
  }
}

// eslint-disable-next-line import/prefer-default-export
export default Product_category;
