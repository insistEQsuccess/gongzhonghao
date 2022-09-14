import { Routes, Route } from "react-router-dom";

import './App.scss';
import Detail from './views/detail/detail'
import Home from './views/home/home'
import List from './views/list/list'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="detail" element={<Detail />} />
        <Route path="/" element={<Home />}>
          <Route path="list" element={<List />} />
        </Route>
    </Routes>
    </div>
  );
}

export default App;
