import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Image } from '@material-ui/icons';
import { url } from 'inspector';

export const useStyles = makeStyles((theme: Theme) => ({
  background: {
    width: '100vw',
    height: '100vh',
    backgroundImage: 'url(app/public/RaffleBG.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));
