import InputTextBox from '../InputTextBox';
import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Question } from '../../assets/questions';

const useStyles = makeStyles((theme) => createStyles({
  questionsBox: {
    margin: 0,
    position: 'absolute',
    top: '80%',
    transform: 'translateY(-80%)',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column'
  },
  options: {
    display: 'flex',
    paddingTop: '40px'
  },
  leftTextBox: {
    width: '65% !important',
    marginLeft: '20%'
  },
  rightTextBox: {
    width: '65% !important',
    marginRight: '20%'
  },
  textBoxInnerCenter: {
    padding: ' 0 150px',
    textAlign: 'center'
  }
}));

interface QuestionsBoxProps {
  question: Question;
  onOptionClicked(id: number, option: string): void;
}

export default function QuestionsBox(props: QuestionsBoxProps) {
  const { onOptionClicked } = props;
  const classes = useStyles();
  const [validate, setValidate] = useState(false);

  const [question, setQuestion ] = useState(props.question);

  useEffect(() => {
    setValidate(false);
    setQuestion(props.question);
  }, [props.question])

  const onClick = (id: number, option: string) => {
    setValidate(true);
    onOptionClicked(id, option);
  }

  return (
    <section className={classes.questionsBox}>
      <InputTextBox classes={{ inner: classes.textBoxInnerCenter }}>
        <Typography variant="h6">
          {question.name}
        </Typography>
      </InputTextBox>
      <section className={classes.options}>
        <InputTextBox validate={validate} isCorrect={question.correct === 'a'} onOptionClicked={() => onClick(question.id, 'a')} classes={{ textBox: classes.leftTextBox }}>
          <Typography variant="h6">
            <span style={{ color: 'orange', fontWeight: 'bold' }}>A:</span> {question.options.a}
          </Typography>
        </InputTextBox>
        <InputTextBox validate={validate} isCorrect={question.correct === 'b'} onOptionClicked={() => onClick(question.id, 'b')} classes={{ textBox: classes.rightTextBox }}>
          <Typography variant="h6">
            <span style={{ color: 'orange', fontWeight: 'bold' }}>B:</span> {question.options.b}
          </Typography>
        </InputTextBox>
      </section>
      <section className={classes.options}>
        <InputTextBox validate={validate} isCorrect={question.correct === 'c'} onOptionClicked={() => onClick(question.id, 'c')} classes={{ textBox: classes.leftTextBox }}>
          <Typography variant="h6">
            <span style={{ color: 'orange', fontWeight: 'bold' }}>C:</span> {question.options.c}
          </Typography>
        </InputTextBox>
        <InputTextBox validate={validate} isCorrect={question.correct === 'd'} onOptionClicked={() => onClick(question.id, 'd')} classes={{ textBox: classes.rightTextBox }}>
          <Typography variant="h6">
            <span style={{ color: 'orange', fontWeight: 'bold' }}>D:</span> {question.options.d}
          </Typography>
        </InputTextBox>
      </section>
    </section>
  );
}
