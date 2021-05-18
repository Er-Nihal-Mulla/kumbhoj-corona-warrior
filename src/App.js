import Header from "./components/Header";
import Prevention from "./components/Prevention";
import Symtoms from "./components/Symtoms";
import Precaution from './components/Precaution';
import Doctor from "./components/Doctor";
import Handwash from "./components/Handwash";
import Footer from './components/Footer';
import './main.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Prevention />
      <Symtoms/>
      <Precaution/>
      <Doctor/>
      <Handwash/>
      <Footer/>
    </div>
  );
}

export default App;
