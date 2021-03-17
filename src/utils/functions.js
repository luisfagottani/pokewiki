import { ReactComponent as PokeballIcon } from 'assets/images/pokeball-icon.svg';

const pokemonImage = (name = '', className = '') => {
  const src = `https://img.pokemondb.net/artwork/${name}.jpg`;

  if (!name) {
    return <PokeballIcon className={className} />;
  }

  return <img src={src} className={className} alt={name} />;
};

export { pokemonImage };
