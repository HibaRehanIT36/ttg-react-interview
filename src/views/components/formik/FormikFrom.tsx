import { Formik } from "formik";
import { formikFormPropsType } from "../../../types/Formik";


const FormikFrom = (props: formikFormPropsType) => {
  const { initialValues, onSubmit, validationSchema, children } = props;

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, values, setFieldValue, errors , resetForm }) => (
        <form noValidate onSubmit={handleSubmit}>
          {children}
        </form>
      )}
    </Formik>
  );
};

export default FormikFrom;
