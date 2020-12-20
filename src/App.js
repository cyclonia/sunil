import profileImage from './img/sunil.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App.</h1>
      <h2>Author : Sunil Sharma</h2>
      <h3>I have just started the project, will complete this by end of 2021.</h3>
      <img src={profileImage} alt="profile-pic"/>
    </div>
  );
}

export default App;
