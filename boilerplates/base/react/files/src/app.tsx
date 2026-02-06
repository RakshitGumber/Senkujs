const App = () => {
  return (
    <div className="app">
      <div className="hero">
        <img src="/logo.png" alt="hehehe" />
      </div>
      <h1>
        Arigatou, for using{" "}
        <a href="https://senkujs.com" target="_blank">
          Senku Js!
        </a>
      </h1>
      <div className="box">
        <span className="counter">{counter}</span>
        <div className="actions">
          <button
            onClick={(e) => {
              setCounter(counter + 1);
            }}
            className="action-buttons"
          >
            Plus
          </button>
          <button
            onClick={(e) => {
              setCounter(counter - 1);
            }}
            className="action-buttons"
          >
            Minus
          </button>
        </div>
      </div>
      <span className="hint">Edit src/App.jsx to get started</span>
    </div>
  );
};
export default App;
