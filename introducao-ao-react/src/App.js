import './App.css';

function App() {
  const olamundo= "Ola Mundo";
  const data = new Date();

  return (
      <div class="container">        
        <h2>
          {olamundo.toUpperCase() + " " + data} 
        </h2>
        <h2>
          {olamundo.toLowerCase() + " " + data}
        </h2>
        <h2>
          <i>{olamundo + " " + data}</i>
        </h2>
        <h2>
          <b>{olamundo.split('').reverse().join('') + " " + data}</b>
        </h2>
        <h2>
          {olamundo.slice(0, 5) + " " + data}
        </h2>
        <h2>
          {olamundo.split('').sort(() => {return 0.5-Math.random()}).join('') + " " + data}
        </h2>
        <h2>
          {olamundo.repeat(2) + " " + data} 
        </h2>
        <h2>
          {olamundo.charAt(4)+olamundo.charAt(0)+olamundo.charAt(8)+olamundo.charAt(1) + " " + data}
        </h2>
        <h2>
          {olamundo + " " + data}
        </h2>
        <h2>
          {olamundo.split('').reverse().join('') + " " + data}
        </h2>        
      </div>
  );
}

export default App;