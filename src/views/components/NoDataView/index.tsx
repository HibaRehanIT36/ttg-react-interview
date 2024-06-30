import { NoDataViewProps } from '../../../types/noDataView';
import { Box, CardMedia, Typography, createStyles, makeStyles } from '@material-ui/core';



const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '40px',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      marginTop: '100px',
    },
    text: {
      textAlign: 'center',
    },
  })
);

function NoDataView({ text, imageSrc, imageWidth, imageHeight }: NoDataViewProps) {
  const classes = useStyles({ imageWidth, imageHeight });
  return (
    <Box className={classes.container}>
      <CardMedia
        component="img"
        src={imageSrc}
        style={{ width: imageWidth, height: imageHeight }}
      />
      <Typography variant="body1" className={classes.text}>
        {text}
      </Typography>
    </Box>
  );
}

export default NoDataView;
