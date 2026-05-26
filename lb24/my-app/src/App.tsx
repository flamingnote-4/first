import HobbyWithAList from './HobbyClass';
import Hobby from './HobbyFunction';
import './App.css';

const tracks = [
  {id: 1, value: "Boards of Canada - Left Side Drive"},
  {id: 2, value: "Jukio Kallio - Groundworks of the Past"},
  {id: 3, value: "Soundgarden - Black Hole Sun"},
  {id: 4, value: "Crystal Castles - Magic Spells"},
  {id: 5, value: "Creo - Dark Tides"},
  {id: 6, value: "Aphex Twin - Flim"},
];

const games = [
  {id: 1, value: "Factorio"},
  {id: 2, value: "Terraria"},
  {id: 3, value: "Rain World"},
  {id: 4, value: "Celeste"},
];

function App() {
  return (
    <div className="app-root">
      <h1>Лабораторна робота №10</h1>
      <h2>react (vite)</h2>
      <hr className="divider" />
      <Hobby title="Мої хобі">
        Часто слухаю музику. У вільний час (якщо він є) я зазвичай граю в ігри, інколи малюю.
      </Hobby>

      <HobbyWithAList title="Музика" list={tracks}>
        Я люблю слухати музику.
      </HobbyWithAList>

      <HobbyWithAList title="Ігри" list={games}>
        Інколи я розв'язую кросворди або складаю пазли. Час від часу граю у відеоігри, ось декілька з моїх улюблених:
      </HobbyWithAList>
    </div>
  );
}

export default App;