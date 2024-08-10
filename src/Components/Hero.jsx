import AnchorLink from "react-anchor-link-smooth-scroll"
import profile_img from "../assets/profile_img.png"

const Hero = () => {
  return (
    <div id="home" className="flex items-center flex-col gap-7">
      <div className="flex justify-center items-center gap-8">
        <img src={profile_img} alt="profile_img" className="rounded-full mt-8 h-60 w-60 max-md:h-48 max-md:w-48 max-md:mb-3"/>
      </div>
        <h1 className="text-center font-semibold text-6xl w-[55vw] leading-tight max-md:text-4xl max-md:w-[90vw] max-md:leading-loose"><span className="bg-custom-gradient-hero backdrop-bg-clip-text">I am Vineet Sonkar,</span> Frontend Developer based in India.</h1>
        <p className="w-1/2 text-center leading-relaxed text-lg max-md:w-[90vw]">I am a Frontend Developer with a growing skill set in modern web technologies. Aiming to deliver smooth and interactive user experiences</p>

        <div className="flex items-center gap-4 text-md font-semibold">
            <div className="bg-custom-gradient-button px-8 py-4 cursor-pointer rounded-full hover:border-2 border-white ">
            <AnchorLink className="text-white" href="#contact" offset={50}>
              Connect With Me
            </AnchorLink>
            </div>

            <div className="px-8 py-4 cursor-pointer rounded-full border-2 border-white hover:border-purple-600">
                My Resume
            </div>
        </div>
    </div>
  )
}

export default Hero