import { Link } from 'react-router-dom';
// import { CgProfile } from 'react-icons/cg';
import { IoIosContact } from "react-icons/io";
export function Navbar() {


 
    return (
     <ul className='nav'>



        <li className='logo-nav'><Link to={'/'}> <img src="https://cdn.discordapp.com/attachments/991974904587091968/1004297290237870161/image0.jpg" alt="logo" width='35px' height="36" /></Link></li>

        {/* <li className='title'><Link to={'/library'}>الرئيسية</Link></li> */}
       
        <li className='c1'><Link to={'/prodcast'}>Home</Link></li>
        <li className='c1'><Link to={'/register'}> Portress</Link> </li>
        <li className='c1'><Link to={'/register'}> Contact us</Link> </li>
      

        <li className='details button'> <Link to={'/login'}> <button type="button"  className='details button' > Access  </button> </Link></li>
        {/* <li className='search-nav-1'><Link to={'/profile'}> <IoIosContact size={30} /></Link></li> */}
      </ul>
      
    );
}

