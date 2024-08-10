import logo from "../assets/logo.jpg"
import user_icon from "../assets/user_icon.svg"

const Footer = () => {
  return (
    <div className="flex flex-col mx-28 gap-6 max-md:items-start max-md:mx-8 max-md:-mt-4">
        <div className="flex justify-between max-md:flex-col">
            <div className="">
                <img src={logo} alt="footer_logo" className=""/>
                <p className="max-w-lg mt-2 max-md:mb-9 max-md:mx-3">I am a Frontend Developer focused on creating intuitive, responsive web designs. I am excited to collaborate on innovative projects.</p>
            </div>
            <div className="flex items-center gap-8">
                <div className="flex px-8 py-3 pr-20 gap-8 bg-[#32323b] rounded-full hover:border-2 border-white max-md:pr-0">
                    <img src={user_icon} alt="user_icon" className="max-md:hidden"/>
                    <input type="text" placeholder="Enter Your Email" className="outline-none border-none bg-transparent text-gray-400 text-lg placeholder:text-lg max-md:" />
                </div>

                <div className="rounded-full bg-custom-gradient-button cursor-pointer px-12 py-3 text-lg transform transition-transform duration-300 ease-in hover:scale-110 max-md:px-6">
                    Subscribe
                </div>
            </div>
        </div>

        <hr className="w-full border-t border-gray-300 my-4"/>

        <div className="flex justify-between text-md max-md:flex-col max-md:gap-3">
            <p className="">© 2024 Vineet Sonkar. All rights reserved.</p>
            <div className="flex gap-10 mb-16">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>

    </div>
  )
}

export default Footer