import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DisplayUser from './components/DisplayUser';
import AddUser from './components/AddUser';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DisplayUser/>}/>
          <Route path='/add' element={<AddUser/>}/>
          <Route path='/add/:id' element={<AddUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
