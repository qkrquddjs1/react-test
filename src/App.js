
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
           <Route path="user">
             <Route index element={<UserList/>}/>
             <Route path=":id" element={<UserDetail/>}/>
           </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
