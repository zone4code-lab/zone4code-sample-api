---
to: infra/adapters/mongoAdapter/schema/<%= name%>.js
---
import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);
schema.index({ name: 'text' });
// eslint-disable-next-line import/prefer-default-export

export const schema<%= h.capitalize(name)%> = schema;

export const <%= h.capitalize(name)%>Model = mongoose.model('<%= h.capitalize(name)%>', schema);
