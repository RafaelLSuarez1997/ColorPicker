// Write your Color component here
const Color = (props) => {
  return <div className={props.color}></div>
}

const App = () => {
  return (
    <div id="container">
      <div id="colors-list">
      <Color color="red"/>
      <Color color="violet"/>
      <Color color="green"/>
      </div>
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">{/* colors go here */}</div>
    </div>
  );
};

export default App;
