import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

export default function Timer(props: any) {
  const { initialMinute = 0, initialSeconds = 0, onFinish } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          onFinish();
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      {minutes === 0 && seconds === 0
        ? null
        : <Box display="flex" alignItems="center" p="10px">
          <Typography variant="h4" style={{ marginRight: '10px' }}>
            Próxima pregunta en {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </Typography>
        </Box>
      }
    </div>
  );
}
