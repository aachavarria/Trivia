import Avatar from '@material-ui/core/Avatar';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import AccessibleForwardRoundedIcon from '@material-ui/icons/AccessibleForwardRounded';
import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => createStyles({
  helpBox: {
    float: 'right',
    padding: '10px',
    cursor: 'pointer'
  },
  disabled: {
    opacity: '0.5',
    pointerEvents: 'none'
  },
  avatar: {
    background: 'linear-gradient(to right, #6a3093 0%, #a044ff  51%, #6a3093  100%)',
    border: '2px solid #e1bfdd',
    width: '80px',
    height: '80px',
    marginBottom: '20px',
    '& svg': {
      fontSize: '3rem'
    }
  }
}));

interface HelpersProps {
  onHelperClicked(type: string): void;
  disabledList: string[];
}

export default function Helpers(props: HelpersProps) {
  const { onHelperClicked, disabledList} = props;
  const classes = useStyles();
  return (
    <section className={classes.helpBox}>
      <Avatar className={ clsx(classes.avatar,disabledList.includes('public') && classes.disabled ) } onClick={() => onHelperClicked('public')}>
        <GroupRoundedIcon />
      </Avatar>
      <Avatar className={ clsx(classes.avatar,disabledList.includes('friend') && classes.disabled ) }  onClick={() => onHelperClicked('friend')}>
        <AccessibleForwardRoundedIcon />
      </Avatar>
      <Avatar className={ clsx(classes.avatar,disabledList.includes('5050') && classes.disabled ) }  onClick={() => onHelperClicked('5050')}>
        50/50
      </Avatar>
    </section>
  );
}
