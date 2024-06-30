import React from 'react';
import GenericDialog from './GenericDialog';
import { deleteDialogPropsType } from '../../../types/genericDialogs';
import { Typography, createStyles, makeStyles } from '@material-ui/core';



const useStyles = makeStyles(theme =>
  createStyles({
    confirmationMessage: {
      textTransform: 'capitalize',
      letterSpacing: 0.1,
      color: theme.palette.secondary.dark,
      fontWeight: 600,
    },
  })
);
const DeleteConfirmationDialog = ({
  open,
  handleDelete,
  deletedItem,
  handleCancel,
}: deleteDialogPropsType) => {
  const classes = useStyles();
  return (
    <>
      <GenericDialog
        handleClose={handleCancel}
        open={open}
        title="Delete Confirmation"
        submitButtonLabel="Delete"
        handleSubmit={handleDelete}
        handleCancel={handleCancel}
      >
        <Typography variant="caption" className={classes.confirmationMessage}>
          Are you sure you you want to delete this {deletedItem}?
        </Typography>
      </GenericDialog>
    </>
  );
};

export default DeleteConfirmationDialog;
