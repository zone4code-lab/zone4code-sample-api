---
to: infra/adapters/postgresAdapter/schema/<%= name%>.js
---
import objection from 'objection';
const { Model } = objection;

class <%= h.capitalize(name)%> extends Model{
  static get tableName() {
    return '<%= name%>';
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

// eslint-disable-next-line import/prefer-default-export
export default <%= h.capitalize(name)%>;
