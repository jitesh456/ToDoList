import './App.css';
import AddDataInList from './Component/AddDataInList';
import {Provider} from 'react-redux';
import Store from './Redux/Store';


function App(props) {
  return (
    <div className="App" >
      <header className="App-header">
       
        <Provider store={Store}>
          <AddDataInList  name="Add Data"/>
        </Provider>
        
      </header>
    </div>
  );
}

export default App;
