

import './App.css'
import Sidebar from './components/Siderbar';
import Topbar from './components/Topbar';
import Main from './components/main';

//import Topbar from './components/Topbar';
//import Sidebar from './components/Siderbar';
//import Main from './components/main';
import Workspace from './components/workspace';


function App() {

 
 

  return (
    <div className="app">
    <Workspace>
      
      <Topbar></Topbar>
      <Sidebar></Sidebar>
      <Main>
        Balaji
      </Main>
    </Workspace>
    
    </div>
  );
}

export default App

