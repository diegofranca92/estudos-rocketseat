import React from 'react';

import  './devCard.css';

function DevCard({ dev }) {
 return(
  <li className="dev-card">
    <header>
      <img src={dev.avatar_url} alt={dev.name}/>
      <div className="user-info">
        <strong>{dev.name}</strong>
        <span>{dev.techs.join(', ')}</span>
      </div>
    </header>
    <p>{dev.bio}</p>
    <a href={`https://github.com/${dev.git_username}`} target="_blank" >Perfil Github</a>
  </li>
 );
}

export default DevCard;