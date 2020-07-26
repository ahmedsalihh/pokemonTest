import React from 'react';

import ImmflyLogo from '../../assets/img/immfly-logo.png';
import PokemonLogo from '../../assets/img/pokemon-logo.png';

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={ImmflyLogo} alt="logo" />
      </div>
      <div>
        <img src={PokemonLogo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
