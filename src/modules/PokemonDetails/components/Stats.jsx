import { useIntl } from 'react-intl';
import classNames from 'classnames';

import Layout from 'modules/shared/Layout';
import LoadingSection from 'modules/shared/LoadingSection';
import { progressBarColor } from '../utils';

import style from './Stats.module.scss';

const Stats = ({ stats = [] }) => {
  const intl = useIntl();
  const isLoading = stats.length === 0;

  return (
    <div className={style.stats}>
      <Layout.Subtitle label={intl.formatMessage({ id: 'details.stats.title' })} />
      <LoadingSection isLoading={isLoading} />
      <ul className={style.stats__list}>
        {stats.map((item) => (
          <li
            key={item?.stat?.name}
            className={classNames(style.stats__item, style[`stats__item--${progressBarColor(item?.base_stat)}`])}
          >
            <span className={style.stats__label}>
              {intl.formatMessage({ id: `details.stats.label.${item?.stat?.name}` })}
            </span>
            <div className={style.stats__progress}>
              <span className={style['stats__progress-bar']} style={{ width: `${item?.base_stat}%` }}></span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stats;
