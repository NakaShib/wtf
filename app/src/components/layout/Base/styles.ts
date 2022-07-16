import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const RaffleBG = 'url(RaffleBG.png)';
export const useStyles = makeStyles((theme: Theme) => ({
  background: {
    width: '100vw',
    height: '100vh',
    backgroundImage: RaffleBG,
    background: '#24252cc2',
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