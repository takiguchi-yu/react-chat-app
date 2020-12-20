import crypto from 'crypto';

export const gravatarPath = (value) => {
  const lowerCaseValue = value.trim().toLowerCase();
  const md5 = crypto.createHash('md5');
  const digest = md5.update(value, 'binary').digest('hex');

  return `https://www.gravatar.com/avatar/${digest}/?d=robohash`;
}
