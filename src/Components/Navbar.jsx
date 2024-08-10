import { useRef, useState } from "react"
import logo from "../assets/logo.jpg"
import nav_underline from "../assets/nav_underline.svg"
import menu_open from "../assets/menu_open.svg"
import menu_close from "../assets/menu_close.svg"

import AnchorLink from "react-anchor-link-smooth-scroll"
const Navbar = () => {

  const [menu, setMenu] = useState("home")
  const menuRef = useRef()
  
  const openMenu = () => {
    menuRef.current.style.right = "0"
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-380px"
  }
  return (
    <div className='flex justify-between items-center mx-40 my-5 max-md:mx-10 max-md:my-5' >
        <img src={logo} alt="logo" />
        <img src={menu_open} alt="toggle_open" className="hidden max-md:block  max-md:fixed max-md:right-8" onClick={openMenu}/>
        <ul className='flex items-center list-none gap-14 text-lg max-md:fixed max-md:flex max-md:flex-col max-md:items-center max-md:gap-10 max-md:top-0 max-md:w-64 max-md:bg-[#1F0016] max-md:h-full max-md:z-30 max-md:-right-96 transition-all duration-500 ease-in' ref={menuRef}>
          <img src={menu_close} alt="toggle_close" className="hidden max-md:relative max-md:block max-md:ml-60 max-md:mt-8 max-md:w-8" onClick={closeMenu}/>
          <li className="cursor-pointer flex flex-col items-center gap-1 max-md:text-2xl max-md:gap-5 max-md:flex-row">
            <AnchorLink className="text-white" offset={50}>
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home" ? (<img src={nav_underline} alt="underline_img" className="w-7"/>) : <></>}
          </li>

          <li className="cursor-pointer flex flex-col items-center gap-1 max-md:text-2xl max-md:gap-5 max-md:flex-row">
            <AnchorLink className="text-white"  href="#about" offset={50}>
              <p onClick={() => setMenu("about")}>About Me</p>
            </AnchorLink>
            {menu === "about" ? (<img src={nav_underline} alt="underline_img" className="w-7"/>) : <></>}
          </li>

          <li className="cursor-pointer flex flex-col items-center gap-1 max-md:text-2xl max-md:gap-5 max-md:flex-row">
            <AnchorLink className="text-white"  href="#services" offset={50}>
              <p onClick={() => setMenu("services")}>Services</p>
            </AnchorLink>
            {menu === "services" ? (<img src={nav_underline} alt="underline_img" className="w-7"/>) : <></>}
          </li>

          <li className="cursor-pointer flex flex-col items-center gap-1 max-md:text-2xl max-md:gap-5 max-md:flex-row">
            <AnchorLink className="text-white" href="#work" offset={50}>
              <p onClick={() => setMenu("work")}>Portfolio</p>
            </AnchorLink>
            {menu === "work" ? (<img src={nav_underline} alt="underline_img" className="w-7"/>) : <></>}
          </li>

          <li className="cursor-pointer flex flex-col items-center gap-1 max-md:text-2xl max-md:gap-5 max-md:flex-row">
            <AnchorLink className="text-white" href="#contact" offset={50}>
              <p onClick={() => setMenu("contact")}>Contact</p>
            </AnchorLink>
            {menu === "contact" ? (<img src={nav_underline} alt="underline_img" className="w-7"/>) : <></>}
          </li>
        </ul>
        <div className='px-6 py-3 rounded-[2rem] bg-custom-gradient text-md cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 max-md:hidden'>
        <AnchorLink className="text-white" href="#contact" offset={50}>
          Connect With Me
        </AnchorLink>
        </div>
    </div>
  )
}

export default Navbar