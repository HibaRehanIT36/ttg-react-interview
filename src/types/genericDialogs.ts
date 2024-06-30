import { DialogProps } from "@material-ui/core";
import { ReactElement } from "react";

export type deleteDialogPropsType = {
    open : boolean;
    handleDelete: () => void;
    deletedItem: string;
    handleCancel: () => void;
  };

  export type genericDialogPropsType = {
    handleClose: () => void;
    handleCancel: () => void;
    handleSubmit: () => void;
    title: string;
    children: ReactElement;
    submitButtonLabel?: string;
  } & DialogProps;