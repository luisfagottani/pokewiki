const reduceSpecies = (results) =>
  results.reduce((current, next) => {
    const name = next?.name;
    if (!current[name]) {
      current[name] = { name };
    }
    return current;
  }, {});

export { reduceSpecies };
