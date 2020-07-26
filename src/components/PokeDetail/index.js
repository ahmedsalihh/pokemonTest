import React from 'react';

const PokeDetail = () => {
  return (
    <div className="container">
      <div className="detail-card">
        <a className="close" href="/pokemon">
          X
        </a>
        <img
          src={`https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif`}
          alt="charizard"
        />
        <h4>Charizard</h4>
        <div className="specs">
          <label>ID: </label>
          <span>4</span>
          <div className="clr" />
          <label>Type: </label>
          <span>flying</span>
          <br />
          <label>Height: </label>
          <span>17</span>
          <br />
          <label>Habilities</label>
          <ul>
            <li>Solar</li>
            <li>blaze</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokeDetail;
