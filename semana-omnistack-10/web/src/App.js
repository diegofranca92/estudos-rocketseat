import React, {useState,useEffect} from 'react';


import './global.css';
import './App.css';
import  './Sidebar.css';
import  './Main.css';

function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, [])

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="git_username">Usuário do Gihub</label>
            <input name="git_username" id="git_username" required/>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>
          <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input name="latitude" id="latitude" value={latitude} required/>
          </div>
          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input name="longitude" id="longitude" value={longitude} required/>
          </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-card">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/29843809?s=460&u=187c94875705090dc975e649f670765e61957651&v=4" alt="Diego França"/>
              <div className="user-info">
                <strong>git_username</strong>
                <span>techs</span>
              </div>
            </header>
            <p>bio</p>
            <a href="https://github.com/diegofranca92" target="_blank" >Perfil Github</a>
          </li>
          <li className="dev-card">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/29843809?s=460&u=187c94875705090dc975e649f670765e61957651&v=4" alt="Diego França"/>
              <div className="user-info">
                <strong>git_username</strong>
                <span>techs</span>
              </div>
            </header>
            <p>bio</p>
            <a href="https://github.com/diegofranca92" target="_blank" >Perfil Github</a>
          </li>
          <li className="dev-card">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/29843809?s=460&u=187c94875705090dc975e649f670765e61957651&v=4" alt="Diego França"/>
              <div className="user-info">
                <strong>git_username</strong>
                <span>techs</span>
              </div>
            </header>
            <p>bio</p>
            <a href="https://github.com/diegofranca92" target="_blank" >Perfil Github</a>
          </li>
          <li className="dev-card">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/29843809?s=460&u=187c94875705090dc975e649f670765e61957651&v=4" alt="Diego França"/>
              <div className="user-info">
                <strong>git_username</strong>
                <span>techs</span>
              </div>
            </header>
            <p>bio</p>
            <a href="https://github.com/diegofranca92" target="_blank" >Perfil Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
