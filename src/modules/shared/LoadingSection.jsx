import { ReactComponent as PokeballIcon } from 'assets/images/pokeball-icon.svg';

import style from './LoadingSection.module.scss';

const LoadingSection = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className={style.loading}>
      <PokeballIcon className={style.loading__ball} />
    </div>
  );
};

export default LoadingSection;
