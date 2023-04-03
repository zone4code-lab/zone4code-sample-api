import objection from 'objection';
const { Model } = objection;

class Task extends Model {
  static get tableName() {
    return 'tasks';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      // required: [],
      properties: {
        title: { type: 'string' },
        description: { type: 'string' },
        is_complete: { type: 'boolean' },
        user_id: { type: 'string' },
      },
    };
  }
}

export default Task;
