import objection from 'objection';
const { Model } = objection;

class Person extends Model {
  static get tableName() {
    return 'person';
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
}

export default Person;
