import logo from './logo.svg';
import './App.css';

import MainCard from './Components/MainCard';
import { Route, Routes } from 'react-router-dom';
import JavascriptInterview from './Pages/JavascriptInterview';
import ReactInterview from './Pages/ReactInterview';
import NodeInterview from './Pages/NodeInterview';
import JavaInterview from './Pages/JavaInterview';
import PythonInterview from './Pages/PythonInterview';
import ReactNative from './Pages/ReactNative';

function App() {
  return (
    <div className="App mt-5">
<Routes>
  <Route path='/' element={<MainCard/>}/>
  <Route path='/javascriptinterview' element={<JavascriptInterview/>}/>
  <Route path='/reactinterview' element={<ReactInterview/>}/>
  <Route path='/nodeinterview' element={<NodeInterview/>}/>
  <Route path='/javainterview' element={<JavaInterview/>}/>
  <Route path='/pythoninterview' element={<PythonInterview/>}/>
  <Route path='/reactnative' element={<ReactNative/>}/>
</Routes>


    </div>
  );
}

export default App;
