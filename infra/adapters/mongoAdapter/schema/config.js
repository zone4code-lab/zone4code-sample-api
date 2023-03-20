import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    size: {
      type: String,
      default: '',
    },
    extension: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export const schemaConfig = schema;
// eslint-disable-next-line import/prefer-default-export
export const ConfigModel = mongoose.model('ConfigMine', schema);
