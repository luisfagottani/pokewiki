import { connect } from 'react-redux';

import { getPokemons } from 'redux/ducks/pokemons';

import PokeBlock from './components/PokeBlock';

import style from './PokeBlocks.module.scss';

const PokeBlocks = ({ species }) => (
  <ul className={style.pokeblocks}>
    {Object.values(species).map((specie) => (
      <PokeBlock key={specie.name} label={specie.name} />
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  species: getPokemons(state),
});

export default connect(mapStateToProps, null)(PokeBlocks);
