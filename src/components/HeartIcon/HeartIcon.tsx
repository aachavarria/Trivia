import heart from '../../assets/heart.svg';
import heartEmpty from '../../assets/heart_empty.svg';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => createStyles({
  wrapper: {
    position: 'relative',
  },
  root: {
    width: '100px',
    height: '100px',
    display: 'block',
    //backgroundImage: `url(${heart})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  absolute: {
    position: 'absolute',
    overflow: 'hidden',
    transition: 'width 1s ease-in-out',
    width: '100%',
    '&.empty': {
      width: '0'
    }
  },
  fill: {
    backgroundImage: `url(${heart})`,
  },
  empty: {
    backgroundImage: `url(${heartEmpty})`
  }
}));

interface HeartIconProps {
  empty?: boolean;
}

export default function HeartIcon(props: HeartIconProps) {
  const { empty = false } = props;
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={clsx(classes.absolute, empty && 'empty')}>
        <div className={clsx(classes.root, classes.fill)} />
      </div>
      <div className={clsx(classes.root, classes.empty)} />
    </div>
  );
}
