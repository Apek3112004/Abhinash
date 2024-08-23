
import React,{useState} from 'react'
import { Link,NavLink } from 'react-router-dom';
import "./Navbar.css"
import { assets } from '../assets/assets';

const Navbar = () => {
  const [visible,setvisible]=useState(false);
  const [showsearch,setshowsearch]=useState(false);

  return (
    <div>
        <NavLink >
        <div className="flex justify-between items-center py-2 font-medium">
			<Link to='/'><img src="	https://y4d.ngo/assets/images/y4d/logo.png" className="w-36" alt="Logo" /></Link>
			<ul className="hidden sm:flex gap-5 text-sm text-gray-700">
				<NavLink to="/" className="flex flex-col items-center gap-1">
					<p>Home</p>
					<hr className="w-2/4 border-none h-[1.5px] bg-slate-950 hidden" />
				</NavLink>
				<NavLink to="/Login" className="flex flex-col items-center gap-1">
					<p>Login</p>
					<hr className="w-2/4 border-none h-[1.5px] bg-slate-950 hidden" />
				</NavLink>
				<NavLink to="/register" className="flex flex-col items-center gap-1">
					<p> Register</p>
					<hr className="w-2/4 border-none h-[1.5px] bg-slate-950 hidden" />
				</NavLink>
				<NavLink to="/profile" className="flex flex-col items-center gap-1">
					<p>My profile</p>
					<hr className="w-2/4 border-none h-[1.5px] bg-slate-950 hidden" />
				</NavLink>
			</ul>
			<div className="flex items-center gap-6">
				<img onClick={()=>setshowsearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
				<div className="group relative w-5 cursor-pointer">
					<img src={assets.profile_icon} />
					<div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
						<div className="flex flex-col gap-2 w-36 px-2 py-3 bg-slate-100 text-gray-500 rounded">
							<p className="cursor-pointer hover:text-black hover:bg-slate-200">
								My profile
							</p>
							<p className="cursor-pointer hover:text-black hover:bg-slate-200">
								Orders
							</p>
							<p className="cursor-pointer hover:text-black hover:bg-slate-200">
								Log Out
							</p>
						</div>
					</div>
				</div>
                
                <img onClick={()=>{setvisible(true)}} src={assets.menu_icon} alt="" className='w-5 cursor-pointer sm:hidden'/>
			</div>
            {/* sidebar menu for smaller screen  */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>{setvisible(false)}} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
		</div>
        </NavLink>

    </div>
  )
}

export default Navbar

