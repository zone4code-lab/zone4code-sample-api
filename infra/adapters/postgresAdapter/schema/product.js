import objection from 'objection';
import Type from './type';
import Size from './size';
const { Model } = objection;

class Product extends Model {
  static get tableName() {
    return 'products';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        name: { type: 'string' },
        description: { type: 'string' },
        exclude_extra: { type: 'boolean' },
        image: { type: 'string' },
      },
    };
  }

  static get relationMappings() {
    // const Extra = require('./extra');
    // const Category = require('./category');
    return {
      types: {
        relation: Model.HasManyRelation,
        modelClass: Type,
        join: {
          from: 'products.id',
          to: 'types.product_id',
        },
      },
      sizes: {
        relation: Model.ManyToManyRelation,
        modelClass: Size,
        join: {
          from: 'products.id',
          through: {
            from: 'product_size.product_id',
            to: 'product_size.size_id',
          },
          to: 'sizes.id',
        },
      },
      // extras: {
      //   relation: Model.ManyToManyRelation,
      //   modelClass: Extra,
      //   join: {
      //     from: 'products.id',
      //     through: {
      //       from: 'product_extra.product_id',
      //       to: 'product_extra.extra_id',
      //     },
      //     to: 'extras.id',
      //   },
      // },
      // categories: {
      //   relation: Model.ManyToManyRelation,
      //   modelClass: Category,
      //   join: {
      //     from: 'products.id',
      //     through: {
      //       from: 'product_category.product_id',
      //       to: 'product_category.category_id',
      //     },
      //     to: 'categories.id',
      //   },
      // },
    };
  }
}
// eslint-disable-next-line import/prefer-default-export
export default Product;
