import './App.css';
import Sidebar from './Sidebar.js';
import Main from './Main.js';
import store from './store';
import _ from 'lodash';

function App() {
  const { contacts } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
}

export default App;
