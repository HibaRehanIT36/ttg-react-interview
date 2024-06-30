import { IconifyIcon } from "@iconify/react";
import { BoxProps } from "@material-ui/core";

export interface genericIconifyProps extends BoxProps {
    icon: IconifyIcon | string;
  }