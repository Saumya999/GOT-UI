import './App.css';
import PrimarySearchAppBar from './components/appbar/Header';
import DataMainView from './components/dataView/Data.mainView';
import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <DataMainView/>
    </div>
  );
}

export default App;
