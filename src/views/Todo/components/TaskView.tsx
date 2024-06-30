import { todoActions } from '../actions';
import { useDispatch } from 'react-redux';
import { Task } from '../../../types/Task';
import Iconify from '../../components/iconify';
import { makeStyles } from '@material-ui/core/styles';
import { useBoolean } from '../../../hooks/useBoolean';
import useApiResult from '../../../hooks/useApiResult';
import { Box, Divider, IconButton, Tooltip, Typography } from '@material-ui/core';
import DeleteConfirmationDialog from '../../components/genericDialogs/deleteConfirmationDilaog';

const useStyles = makeStyles(theme => ({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    gap: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    borderRadius: '16px',
    padding: '20px 20px',
    display: 'flex',
    width: '100%',
  },
  dateText: {
    fontWeight: 600,
    maxWidth: '60px',
    color: theme.palette.secondary.main,
  },
  verticalDivider: {
    backgroundColor: theme.palette.background.default,
  },
  horizontalDivider: {
    backgroundColor: theme.palette.background.default,
    height: '1px',
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  infoBox: {
    minHeight: '70px',
    justifyContent: 'center',
    marginLeft: theme.spacing(2),
    gap: theme.spacing(0.5),
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    gap: theme.spacing(1),
    display: 'flex',
    color: theme.palette.primary.main,
  },
  icon: {
    width: 22,
    color: theme.palette.error.main,
  },
  iconButton: {
    marginTop: 'auto',
  },
}));

const TaskView = ({ task }: { task: Task }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const openDeleteTaskConfirmation = useBoolean();
  const { handleApiSuccesswithSnackbar} = useApiResult();

  return (
    <Box className={classes.card} key={task.id}>
      <Box className={classes.dateText}>
        <Typography variant="caption">{task.date}</Typography>
      </Box>
      <Divider orientation="vertical" flexItem className={classes.verticalDivider} />
      <Box className={classes.infoBox}>
        <Box className={classes.infoItem}>
          <Typography variant="caption">Task Title</Typography>
        </Box>
        <Typography variant="caption">{task.title}</Typography>

        <Divider orientation="horizontal" flexItem className={classes.horizontalDivider} />
        <Box className={classes.infoItem}>
          <Typography variant="caption">Task Description</Typography>
        </Box>
        <Typography variant="caption">{task.description}</Typography>
      </Box>
      <Tooltip title="Delete Task">
        <IconButton
          className={classes.iconButton}
          onClick={openDeleteTaskConfirmation.onTrue}
        >
          <Iconify icon="ic:round-delete" color="error" className={classes.icon} />
        </IconButton>
      </Tooltip>
      <DeleteConfirmationDialog
        open={openDeleteTaskConfirmation.value}
        handleCancel={openDeleteTaskConfirmation.onFalse}
        deletedItem="task"
        handleDelete={() => {dispatch(todoActions.removeTodo(task.id)); handleApiSuccesswithSnackbar(); }}
      />
    </Box>
  );
};

export default TaskView;
