import * as Yup from 'yup';
import { ValidationSchemas, validationSchemaKey } from '../types/Yup';

export function useYupSchema(key: validationSchemaKey) {
  const taskValidationSchema = Yup.object({
    title: Yup.string()
      .trim()
      .required('Task title is required')
      .min(3, 'Task title must be at least 3 characters'),
    description: Yup.string().trim().min(3, 'Task description must be at least 3 characters'),
  });

  const validationSchemas: ValidationSchemas = {
    task: taskValidationSchema,
  };

  const schema = validationSchemas[key];
  if (!schema) {
    throw new Error(`Unexpected validation schema key: ${key}`);
  }
  return schema;
}
