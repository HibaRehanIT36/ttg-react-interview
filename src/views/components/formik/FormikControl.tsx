
import ControlTexInput from "../inputs/ControlTexInput";
import { formikControlPropsType } from "../../../types/Formik";


const FormokControl = (props: formikControlPropsType) => {
  const { control, inputProps } = props;

  switch (control) {
    case "text": 
      return <ControlTexInput {...inputProps} />;
    default:
      return <></>;
  }
};

export default FormokControl;
