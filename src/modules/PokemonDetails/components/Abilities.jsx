import { useIntl } from 'react-intl';

import Layout from 'modules/shared/Layout';

import style from './Abilities.module.scss';
import LoadingSection from 'modules/shared/LoadingSection';

const Abilities = ({ abilities = [] }) => {
  const intl = useIntl();
  const isLoading = abilities.length === 0;
  return (
    <div className={style.abilities}>
      <Layout.Subtitle label={intl.formatMessage({ id: 'details.abilities.title' })} />
      <LoadingSection isLoading={isLoading} />
      <ul className={style.abilities__list}>
        {abilities.map((item) => (
          <li key={item?.ability?.name} className={style.abilities__item}>
            <span className={style.abilities__label}>{item?.ability?.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Abilities;
