import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToogle from './ThemeToogle'
import {AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className='rounded-div flex items-center justify-between
    h-20 font-bold'>
        <Link to='/' >
           <h1 className='text-2xl ' >Cryptobase</h1>
        </Link>
        {/* median ma harauxa  */}
        <div className='hidden md:block'>
            <ThemeToogle  />
        </div>
        <div className='hidden md:block' >
            <Link className='p-1 hover:text-accent' to="/signin">SignIn</Link>
            <Link to="/signup" className='bg-button text-btnText
            px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl '>SignUp</Link>
        </div>
        {/* Menu Icon */}
        <div className='block md:hidden cursor-pointer z-10'>
            <AiOutlineMenu/>
        </div>

        {/* mobile menu */}

         <div className='md:hidden fixed left-0 top-20 flex-col items-center justify-between w-full h-[90%]
         bg-primary ease-in  duration-300'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/account">Account</Link></li>
                <li>
                    <ThemeToogle/>
                </li>
            </ul>
            <div>
                <Link to="/signin">
                    <button>Sign In</button>
                </Link>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
            </div>
         </div>

    </div>
  )
}

export default Navbar