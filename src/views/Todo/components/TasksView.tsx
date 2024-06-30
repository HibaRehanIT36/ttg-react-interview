import { useEffect } from 'react';
import TaskView from './TaskView';
import { todoActions } from '../actions';
import { Task } from '../../../types/Task';
import { Box, Typography } from '@material-ui/core';
import NoDataView from '../../components/NoDataView';
import noData from '../../../assets/img/no-data.svg';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reducers/rootReducers';


const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    gap: '20px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    marginLeft: theme.spacing(1),
    textTransform: 'capitalize',
    letterSpacing: 0.1,
    color: theme.palette.secondary.dark,
    fontWeight: 600,
  },
}));

const TasksView = () => {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.current);

  useEffect(() => {
    dispatch(todoActions.initializeTodos());
  }, [dispatch]);

  return (
    <Box className={classes.container}>
      <Box>
        <Typography variant="caption" className={classes.title}>
          Management &nbsp; &#11166;&nbsp; Tasks
        </Typography>
      </Box>
      {todos && todos.length > 0 ? (
        <>
          {todos?.map((task: Task) => (
            <TaskView task={task} />
          ))}
        </>
      ) : (
        <NoDataView
          text="You have not added any tasks yet"
          imageSrc={noData}
          imageWidth="256px"
          imageHeight="250px"
        />
      )}
    </Box>
  );
};

export default TasksView;
