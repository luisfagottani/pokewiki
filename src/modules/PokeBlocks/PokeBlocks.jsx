import PokeBlock from './components/PokeBlock';

import style from './PokeBlocks.module.scss';

const PokeBlocks = () => (
  <ul className={style.pokeblocks}>
    <PokeBlock />
    <PokeBlock />
    <PokeBlock />
    <PokeBlock />
    <PokeBlock />
  </ul>
);

export default PokeBlocks;
