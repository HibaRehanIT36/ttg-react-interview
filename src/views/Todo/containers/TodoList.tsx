import AddTodo from '../components/AddTodo';
import Iconify from '../../components/iconify';
import TasksView from '../components/TasksView';
import { useBoolean } from '../../../hooks/useBoolean';
import { Box, IconButton, Tooltip } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme =>
  createStyles({
    addTaskIcon: {
      color: theme.palette.background.paper,
      width: '25px',
      height: '25px',
    },
    addTaskIconIconButton: {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: '50%',
      padding: '10px',
      position: 'absolute',
      right: '18px',
      bottom: '27px',
    },
  })
);

const TodoList = () => {
  const classes = useStyles();
  const openAddDialog = useBoolean();
  return (
    <Box>
      <AddTodo open={openAddDialog.value} handleClose={openAddDialog.onFalse} />
      <TasksView />
      <Tooltip title="Add Task">
        <IconButton className={classes.addTaskIconIconButton} onClick={openAddDialog.onTrue}>
          <Iconify icon="ic:round-plus" className={classes.addTaskIcon} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default TodoList;
