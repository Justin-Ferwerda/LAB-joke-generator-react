import { useState } from 'react';
import getJoke from '../api/jokeData';

const GetJokeButton = () => {
  const [joke, setJoke] = useState();

  const jokeOnDom = () => {
    getJoke().then((jokeObject) => setJoke(jokeObject.setup));
  };

  return (
    <>
      <h2>{joke}</h2>
      <button type="button" onClick={jokeOnDom}>{joke ? 'Get Punchline' : 'Get a Joke'}</button>
    </>
  );
};

export default GetJokeButton;
