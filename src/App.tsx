import ContadorRed from './components/ContadorRed';
import Counter from './components/Counter';
import Formulario from './components/Formulario';
import MainTimer from './components/MainTimer';
import Usuario from './components/Usuario';

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />

      <Counter />

      <Usuario />

      <h2>UseEffect - useRef</h2>
      <hr />
      <MainTimer />

      <h2>useReducer</h2>
      <hr />
      <ContadorRed />

      <h2>Custom Hooks</h2>
      <hr />
      <Formulario />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
