import objection from 'objection';
const { Model } = objection;

class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      // required: [],
      properties: {
        name: { type: 'string' },
      },
    };
  }
}

export default User;
