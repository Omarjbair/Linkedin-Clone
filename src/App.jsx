import { Outlet } from "react-router-dom";

const App = () => {

  return (
    <div className="app relative bg-[#f5f5f5]">
      <Outlet/>
    </div>
  )
}

export default App;
