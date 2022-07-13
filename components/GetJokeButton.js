import { useState } from 'react';
import getJoke from '../api/jokeData';

const GetJokeButton = () => {
  const [joke, setJoke] = useState({});
  const [buttonText, setButtonText] = useState('Get A Joke');

  const jokeOnDom = () => {
    if (buttonText === 'Get A Joke' || buttonText === 'Get Another Joke') {
      getJoke().then((jokeObject) => setJoke(jokeObject)).then(() => {
        setButtonText('Get Punchline');
      });
    } else {
      setButtonText('Get Another Joke');
    }
  };

  return (
    <>
      <h2>{ buttonText === 'Get a Joke' ? '' : joke.setup}</h2>
      <h5>{ buttonText === 'Get Another Joke' ? joke.delivery : ''}</h5>
      <button type="button" onClick={jokeOnDom}>{buttonText}</button>
    </>
  );
};

export default GetJokeButton;
