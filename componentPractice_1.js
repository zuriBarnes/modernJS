// import Header from './Components/Header.js'
// import TestComp from './Components/TestComp.js';
// import Button from './Components/Button'

function App() {
  const myName = 'Zuri'
  // let likes = 234
  return (
  
    <div className="container">
      <h1>{ myName }</h1>
      <p>Liked {Math.floor(Math.random() * 300) } times</p>
      {/* <Header title="Task Tracker" />
      <TestComp />
      <Button />
      <TestComp /> */}
  
    </div>

  );
}
export default App;
