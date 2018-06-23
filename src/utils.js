import { BASE_URI } from './constants';

export const buildSearchURI = ({ language, stars }) => {
  const encodedURI = window.encodeURI(
    `${BASE_URI}?q=stars:>${stars}+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  return encodedURI;
};
