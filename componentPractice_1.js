// import Header from './Components/Header.js'
// import TestComp from './Components/TestComp.js';
// import Button from './Components/Button'

function App() {
  const title = 'Welcome to Task Tracker'
  const link = "https://developers.google.com/"
  const gTarget = "_blank"
  // let likes = 234
  return (
  
    <div className="container">
      {/*  you can add vanilla JS to React */}
      <h1>{ title }</h1>
      <p>{ 10 }</p>
      <p>{ 'This is a test string' }</p>
      <p> { [532, true, 2854, 'test'] }</p>
      <p>Liked { Math.floor(Math.random() * 300) } times</p>
      <a href={ link } target={ gTarget }>Google Developer Website</a>
      {/* <Header title="Task Tracker" />
      <TestComp />
      <Button />
      <TestComp /> */}
  
    </div>

  );
}
export default App;
