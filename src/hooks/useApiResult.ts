import { enqueueSnackbar } from 'notistack';

const useApiResult = () => {
  const handleApiSuccesswithSnackbar = () => {
    enqueueSnackbar({
      variant: 'success',
      message: 'Done Successfully',
      anchorOrigin: { vertical: 'top', horizontal: 'left' },
      autoHideDuration: 1000,
    });
  };
  const handleApiErrorwithSnackbar = (messaga?: string) => {
    enqueueSnackbar({
      variant: 'error',
      message: messaga ?? 'some thing went wrong',
      anchorOrigin: { vertical: 'top', horizontal: 'left' },
      autoHideDuration: 2000,
    });
  };

  return {
    handleApiSuccesswithSnackbar,
    handleApiErrorwithSnackbar,
  };
};

export default useApiResult;
