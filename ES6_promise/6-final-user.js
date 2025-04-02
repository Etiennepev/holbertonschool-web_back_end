import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  const picture = uploadPhoto(firstName, lastName);
  const user = signUpUser(fileName);
  return Promise.allSettled([picture, user]);
}
