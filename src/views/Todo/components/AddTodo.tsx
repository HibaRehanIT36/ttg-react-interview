import { Box } from '@material-ui/core';
import { todoActions } from '../actions';
import { useDispatch } from 'react-redux';
import { Formik, FormikHelpers } from 'formik';
import useApiResult from '../../../hooks/useApiResult';
import { useYupSchema } from '../../../hooks/UseYupSchema';
import FormokControl from '../../components/formik/FormikControl';
import { AddToDoProps, TaskFormValues } from '../../../types/Task';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import GenericDialog from '../../components/genericDialogs/GenericDialog';

const useStyles = makeStyles(theme =>
  createStyles({
    dialog: {
      borderRadius: '16px',
    },
    dialogTitle: {
      backgroundColor: theme.palette.background.default,
    },
    dialogTitleText: {
      textTransform: 'capitalize',
      letterSpacing: 0.1,
      color: theme.palette.secondary.dark,
      fontWeight: 600,
    },
    container: {
      padding: '10px',
      minWidth: '400px',
    },
  })
);

const AddTodo = ({ open, handleClose }: AddToDoProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const taskValidationSchema = useYupSchema('task');

  const { handleApiSuccesswithSnackbar, handleApiErrorwithSnackbar } = useApiResult();

  const handleSubmit = async (values: TaskFormValues, actions: FormikHelpers<TaskFormValues>) => {
    const taskExists = await dispatch(todoActions.checkTodoExists(values.title));
    if (!taskExists) {
      await dispatch(todoActions.addTodo(values.title, values.description));
      actions.setSubmitting(false);
      handleApiSuccesswithSnackbar()
    } else {
      handleApiErrorwithSnackbar('Task with this title already exists')
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik<TaskFormValues>
      initialValues={{ title: '', description: '' }}
      onSubmit={handleSubmit}
      validationSchema={taskValidationSchema}
    >
      {({ submitForm, resetForm }) => (
        <GenericDialog
          title="Add Task"
          handleCancel={() => {
            handleClose();
            resetForm();
          }}
          open={open}
          handleClose={() => {
            handleClose();
          }}
          handleSubmit={() => {
            submitForm().then(() => resetForm());
          }}
        >
          <Box className={classes.container}>
              <FormokControl
                control="text"
                inputProps={{
                  name: 'title',
                  id: 'taskTitle',
                  label: 'Title',
                  variant: 'outlined',
                  margin: 'dense',
                  autoFocus: true,
                }}
              />
              <FormokControl
                control="text"
                inputProps={{
                  name: 'description',
                  id: 'taskDescription',
                  label: 'Description',
                  variant: 'outlined',
                  margin: 'dense',
                  multiline: true,
                  rows: 5,
                  autoFocus: true,
                }}
              />
          </Box>
        </GenericDialog>
      )}
    </Formik>
  );
};

export default AddTodo;
