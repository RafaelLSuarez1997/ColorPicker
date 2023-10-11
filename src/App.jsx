// Write your Color component here

const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
        <h1>hello world</h1>
      </div>
      <div id="colors-list">{/* colors go here */}</div>
    </div>
  );
};

export default App;
