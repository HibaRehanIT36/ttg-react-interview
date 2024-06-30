import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import { genericDialogPropsType } from '../../../types/genericDialogs';



const useStyles = makeStyles(theme =>
  createStyles({
    dialog: {
      '& .MuiPaper-root': {
        borderRadius: '16px',
      },
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
      padding: '20px',
      minWidth: '400px',
    },
    dialogAction: {
      alignItems: 'center',
      paddingBottom: 20,
      paddingTop: 20,
      justifyContent: 'center',
    },
    button: {
      borderRadius: '10px',
      maxWidth: '180px',
      textTransform: 'initial',
      fontWieght: 600,
    },
  })
);
 function GenericDialog({
  open,
  handleClose,
  handleSubmit,
  handleCancel,
  title,
  children,
  submitButtonLabel,
}: genericDialogPropsType) {
  const classes = useStyles();
  return (
    <Dialog onClose={handleClose} open={open} keepMounted className={classes.dialog}>
      <DialogTitle className={classes.dialogTitle}>
        <Typography variant="body2" className={classes.dialogTitleText}>
          {title}
        </Typography>
      </DialogTitle>

      <DialogContent dividers className={classes.container}>
        {children}
      </DialogContent>

      <DialogActions className={classes.dialogAction}>
        <Button
          fullWidth
          variant="outlined"
          onClick={handleCancel}
          color="primary"
          className={classes.button}
        >
          <Typography variant="caption">Cancel</Typography>
        </Button>
        <Button
          fullWidth
          variant="contained"
          type="submit"
          color="primary"
          onClick={() => {
            handleSubmit();
            handleClose();
          }}
          className={classes.button}
        >
          <Typography variant="caption">{submitButtonLabel ?? 'Save'}</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default  GenericDialog;