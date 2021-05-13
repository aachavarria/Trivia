import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

interface InputTextBoxProps {
  children: any;
  classes?: any;
  validate?: boolean;
  isCorrect?: boolean;
  onOptionClicked?(): void;
}

const InputTextBoxStyles = makeStyles((theme) => createStyles({
  textBox: {
    border: '3px solid #e1bfdd',
    padding: '14px 0px',
    background: 'linear-gradient(to right, #6a3093 0%, #a044ff  51%, #6a3093  100%)',
    borderRadius: '50%',
    width: '80%',
    textAlign: 'center',
    '&.correct': {
      borderColor: 'green'
    },
    '&.incorrect': {
      borderColor: 'red'
    }
  },
  InputTextBoxWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    cursor: 'pointer',
    '&::before': {
      content: '""',
      width: '100%',
      position: 'absolute',
      height: '2px',
      background: '#e1bfdd',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: -1
    }
  },
  inner: {
    padding: ' 0 100px',
    textAlign: 'left',
    color: 'white'
  },
  clicked: {
    color: 'orange'
  }
}));

export default function InputTextBox(props: InputTextBoxProps) {
  const classes = InputTextBoxStyles();
  const { children, onOptionClicked, validate = false, isCorrect= false } = props;
  const [active, setActive] = useState(false);
  const onClicked = () => {
    setActive(true);
    onOptionClicked?.()
  }

  return (
    <section className={clsx(classes.InputTextBoxWrapper) } onClick={onClicked}>
      <section className={clsx(classes.textBox, props.classes?.textBox,validate && isCorrect && 'correct', validate && !isCorrect && 'incorrect')}>
        <div className={clsx(classes.inner, props.classes?.inner, active && validate && classes.clicked)}>
          {children}
        </div>
      </section>
    </section>
  );
}
