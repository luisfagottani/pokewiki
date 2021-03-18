import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getGenerations } from 'redux/ducks/generations';

import style from './Generations.module.scss';

const Generations = ({ generations = [] }) => (
  <ul className={style.generations}>
    {Object.values(generations).map((generation, key) => (
      <li key={generation?.name} className={style.generations__item}>
        <Link to={`generations/${generation?.name}`} className={style.generations__content}>
          <span className={style.generations__label}>{generation?.name}</span>
        </Link>
      </li>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  generations: getGenerations(state),
});

export default connect(mapStateToProps)(Generations);
