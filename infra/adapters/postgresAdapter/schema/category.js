import objection from 'objection';
const { Model } = objection;

class Category extends Model{
  static get tableName() {
    return 'categories';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      // required: [],
      properties: {
        name: { type: 'string' },
        parent_id: { type: ['integer', 'null'] },
      },
    };
  }

  static get relationMappings() {
    // Importing models here is one way to avoid require loops.
    return {
      children: {
        relation: Model.HasManyRelation,
        modelClass: Category,
        join: {
          from: 'categories.id',
          to: 'categories.parent_id'
        }
      },
      parent: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: 'categories.parent_id',
          to: 'categories.id'
        }
      }
    };
  }
}

// eslint-disable-next-line import/prefer-default-export
export default Category;
