import * as Yup from 'yup';

export type validationSchemaKey = 'task';

export type ValidationSchemas = {
  [key in validationSchemaKey]: Yup.ObjectSchema<any>;
};
