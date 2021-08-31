import './App.css';
import  Header  from './Components/Header';
import Sidebar from './Components/sidebar';
function App() {
  //authentication
  
  return (

    <div className="App">
      <Header />
      <Sidebar/>
    
      {/*no auth: log in */}
    </div>
  );
}

export default App;
