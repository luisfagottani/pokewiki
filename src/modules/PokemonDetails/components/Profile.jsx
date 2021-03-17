import { pokemonImage } from 'utils/functions';

import style from './Profile.module.scss';

const Profile = ({ name }) => (
  <div className={style.profile}>
    <figure className={style.profile__figure}>
      {pokemonImage(name)}
      <figcaption className={style.profile__caption}>{name}</figcaption>
    </figure>
  </div>
);

export default Profile;
