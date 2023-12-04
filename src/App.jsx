import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import { NormalRoutes } from "./Routes/Routes";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {
            NormalRoutes.map((route, index) =>(
              <Route key={index} path={route.path} element={route.element} />
            ))
          }
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
