
import { Box, FormHelperText, TextField, TextFieldProps, makeStyles } from '@material-ui/core';
import { useField } from 'formik';

const ControlTexInput = (props: TextFieldProps) => {
  const { name, ...other } = props;
  const [field, meta, helpers] = useField(name ?? '');

  const useStyles = makeStyles({
    textField: {
      fontSize: '12px',
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '2px',
      },
    },
  });

  const classes = useStyles();

  return (
    <Box>
      <TextField
        {...other}
        value={field.value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          helpers.setValue(event.target.value);
        }}
        margin="normal"
        fullWidth
        className={classes.textField}
      />
      <Box height={1}>{meta.error && <FormHelperText error>{meta.error}</FormHelperText>}</Box>
    </Box>
  );
};

export default ControlTexInput;
