import './timer.scss';
import React, { ReactElement, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

interface Props {
  remainingTime: number;
  submit(): void;
}

export default function Timer({ remainingTime, submit }: Props): ReactElement {
  const time = new Date();
  const timer = time.setSeconds(time.getSeconds() + remainingTime);

  const { seconds, minutes, hours } = useTimer({ expiryTimestamp: timer, onExpire: () => submit() });

  return <div className="timer">{`Remaining time - ${hours}: ${minutes}: ${seconds}`}</div>;
}
