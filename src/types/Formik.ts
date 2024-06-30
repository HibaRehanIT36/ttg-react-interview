import { TextFieldProps } from '@material-ui/core';
import { FormikValues } from 'formik';
import { ObjectSchema } from 'yup';

export type formikControlPropsType = {
  inputProps: TextFieldProps;
  control: string;
};

export type formikFormPropsType = {
  initialValues: FormikValues;
  onSubmit: (values: FormikValues) => void;
  validationSchema: ObjectSchema<any>;
  children: JSX.Element;
};
