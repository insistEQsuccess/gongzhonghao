import { Outlet } from "react-router-dom";
import './home.scss'
export default function Home () {
  return <div className="home-box">
    <Outlet/>
  </div>
}