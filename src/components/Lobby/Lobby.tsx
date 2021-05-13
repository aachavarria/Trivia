import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import bg from '../../assets/wallpaper.jpeg';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import HeartIcon from '../HeartIcon';
import Helpers from '../Helpers';
import QuestionsBox from '../QuestionsBox';
import Questions from '../../assets/questions';
import Dialog from '@material-ui/core/Dialog';
import Timer from '../Timer';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => createStyles({
  wrapper: {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '&.gameover': {
      backgroundImage: 'none',
      backgroundColor: 'black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  paper: {
    float: 'left',
    padding: '20px',
    background: 'linear-gradient(to right, #6a3093 0%, #a044ff  51%, #6a3093  100%)',
    border: '2px solid #e1bfdd',
    width: 'calc(100% - 180px)'
  },
  title: {
    color: 'white'
  },
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
  },
  red: {
    color: 'red',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  heartWrapper: {
    float: 'left'
  },
  winnerBox: {
    margin: 0,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  }
}));

export default function Lobby() {
  const classes = useStyles();
  const [lives, setLives] = useState(3);
  const [init, setInit] = useState(false);
  const [questionsArray, setQuestionsArray] = useState<number[]>([]);
  const [disabledList, setDisabledList] = useState<string[]>([]);
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    setQuestionsArray(getUniqueNumbersInRange(12, 0, 12));
  }, []);

  const onOptionClicked = (id: number, option: string) => {
    const question = Questions.find(qs => id === qs.id);
    if (question && option !== question.correct) {
      if (lives > 0) {
        setLives(lives - 1);
      }
    }
    if (lives - 1 > 0) {
      setTimeout(() => {
        if (questionsArray.length === 1) {
          setQuestionsArray([]);
        } else {
          setShowTimer(true);
        }
      }, 1000);

    }
  };

  const onHelperClicked = (type: string) => {
    setDisabledList([...disabledList, type]);
    switch (type) {
      case 'public': {
        break;
      }
      case 'friend': {
        break;
      }
      case '5050': {
        break;
      }
    }
  };

  const onTimerFinished = () => {
    let nextItems = [...questionsArray];
    nextItems.shift();
    setShowTimer(false);
    setQuestionsArray(nextItems);
  };

  return <section className={clsx(classes.wrapper, lives === 0 && 'gameover')}>
    {
      init ? (<>
        {
          lives === 0 ? (<Typography className={classes.red} variant="h1">YOU DIED</Typography>) : (<>
            <Box display="flex" width="400px" justifyContent="space-evenly" className={classes.heartWrapper}>
              <HeartIcon empty={lives === 0} />
              <HeartIcon empty={lives <= 1} />
              <HeartIcon empty={lives <= 2} />
            </Box>
            <Helpers onHelperClicked={onHelperClicked} disabledList={disabledList} />
            {
              questionsArray[0] !== undefined &&
              <QuestionsBox question={Questions[questionsArray[0]]} onOptionClicked={onOptionClicked} />
            }
            {
              questionsArray.length === 0 &&
              <div className={classes.winnerBox}>
                <Typography variant="h1" style={{ color: 'white' }}>
                  Yuuuju Rakata, Ganaste!!
                </Typography>
              </div>
            }
          </>)
        }
      </>) : (
        <div className={classes.winnerBox}>
          <Button color="primary" variant="contained" onClick={() => setInit(true)}>
            Iniciar
          </Button>
        </div>
      )
    }
    <
      Dialog
      open={showTimer}
      onClose={() => setShowTimer(false)}
    >
      <Timer initialSeconds={3} onFinish={onTimerFinished} />
    </Dialog>
  </section>;
}

function getUniqueNumbersInRange(uniqueNumbersCount: number, fromInclusive: number, untilInclusive: number): number[] {
  if (0 > uniqueNumbersCount) throw new Error('The number of unique numbers cannot be negative.');
  if (fromInclusive > untilInclusive) throw new Error('"From" bound "' + fromInclusive
    + '" cannot be greater than "until" bound "' + untilInclusive + '".');
  const rangeLength = untilInclusive - fromInclusive + 1;
  if (uniqueNumbersCount > rangeLength) throw new Error('The length of the range is ' + rangeLength + '=['
    + fromInclusive + '…' + untilInclusive + '] that is smaller than '
    + uniqueNumbersCount + ' (specified count of result numbers).');
  if (uniqueNumbersCount === 0) return [];

  const uniqueDigits = new Set();

  while (uniqueNumbersCount > uniqueDigits.size) {
    const nextRngNmb = Math.floor(Math.random() * rangeLength) + fromInclusive;
    uniqueDigits.add(nextRngNmb);
  }

  return Array.from(uniqueDigits) as number[];
}
