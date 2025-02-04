import './layout.css'
import { Link, Outlet } from 'react-router-dom'
import sparkLogo from "../assets/images/sparkHacksLogo.png"

export default function Home(){
    return (
        <div>
            <div className={"h-14 pb-1 bg-primary-light"}></div>
            <nav className={"fixed block top-0 w-full bg-primary-light z-50 animate-fade-in"}>
                <ul className={"flex items-center"}>
                    <li ><img src={sparkLogo} className={"h-12 m-0 inline-block px-1 py-1 align-center box-content"} alt={"spark hacks logo"}/></li>
                    <li className={"w-fit h-fit m-0 inline-block pl-4 pr-2 align-center"}><h5><b>SparkHacks 2023</b></h5></li>
                    <li className={"w-fit h-fit m-0 inline-block px-2"}><Link to="/"><b>Home</b></Link></li>
                    <li className={"w-fit h-fit m-0 inline-block px-2"}><Link to="/contact"><b>RSVP</b></Link></li>
                    <li className={"w-fit h-fit m-0 inline-block px-2"}><Link to="/social"><b>Social</b></Link></li>
                    <li className={"w-fit h-fit m-0 inline-block px-2"}><Link to="/eventdetails"><b>Calendar</b></Link></li>
                    <li className={"w-fit h-fit m-0 inline-block px-2"}><Link to="/about"><b>About</b></Link></li>
                </ul>
            </nav>
            
            <Outlet />
        </div>
    )
}
