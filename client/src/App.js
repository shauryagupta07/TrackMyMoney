
import "antd/dist/antd.css";
import { Button } from "antd";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}


export function ProtectedRoute(props){

  if(localStorage.getItem('trackmymoney-user'))
  {
    return props.children
  }else{
   return <Navigate to='/login'/>
  }

}



export default App;
