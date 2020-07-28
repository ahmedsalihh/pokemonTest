import React from 'react';

import ImmflyLogo from '../../assets/img/immfly-logo.png';
import PokemonLogo from '../../assets/img/pokemon-logo.png';

const Header = () => {
  return (
    <div className="header" data-test="component-header">
      <div>
        <img src={ImmflyLogo} alt="immflylogo" />
      </div>
      <div>
        <img src={PokemonLogo} alt="pokemon" />
      </div>
    </div>
  );
};

export default Header;
