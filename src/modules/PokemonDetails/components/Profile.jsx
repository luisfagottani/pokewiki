import { useIntl } from 'react-intl';

import TermsList from 'modules/shared/TermsList';
import { pokemonImage } from 'utils/functions';

import style from './Profile.module.scss';

const Profile = ({ name = '', details = undefined }) => {
  const intl = useIntl();

  return (
    <div className={style.profile} data-testid="profile">
      <figure className={style.profile__figure}>
        <figcaption className={style.profile__caption}>{name}</figcaption>
        {pokemonImage(name, style.profile__image)}
      </figure>

      <TermsList isLoading={!details}>
        <TermsList.List>
          <TermsList.Item term={intl.formatMessage({ id: 'details.profile.national_number' })} value={details?.id} />
          <TermsList.Item
            term={intl.formatMessage({ id: 'details.profile.base_experiene' })}
            value={details?.base_experience}
          />
          <TermsList.Item term={intl.formatMessage({ id: 'details.profile.height' })} value={details?.height} />
          <TermsList.Item term={intl.formatMessage({ id: 'details.profile.weight' })} value={details?.weight} />
        </TermsList.List>
      </TermsList>
    </div>
  );
};

export default Profile;
