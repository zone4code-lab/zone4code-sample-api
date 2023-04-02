const { Model } = require("objection");

class Person extends Model {
  static get tableName() {
    return "person";
  }

  static get jsonSchema() {
    return {
      type: "object",
      // required: [],
      properties: {
        name: { type: "string" },
      },
    };
  }
}

module.exports = Person;
