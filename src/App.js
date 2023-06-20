import Navbar from '../src/component/Navbar/Navbar'
import './App.css';
import PrevButton from "../src/Bottons/PrevButton/PrevButton"
import NextButton from "../src/Bottons/NextButton/NextButton"
import Sliding from '../src/component/Sliding_img/Sliding'

function App() {
  return (
    <div className="App">
      <Navbar />
      <PrevButton />
      <NextButton />
      <Sliding />
    </div>
  );
}

export default App;
