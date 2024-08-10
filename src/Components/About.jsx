import theme_pattern from "../assets/theme_pattern.svg"
import profile_img2 from "../assets/profile_img2.jpg"
const About = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center gap-20 mx-32 my-28 max-md:items-start max-md:mx-10">
        <div className="relative">
            <h1 className="text-6xl font-semibold text-center max-md:text-5xl">About me</h1>
            <img src={theme_pattern} alt="theme" className="absolute h-14 top-3 left-28 -z-10 max-md:h-10 max-md:left-32"/>
        </div>
        <div className="flex gap-16 max-md:flex-col">
          <div className="max-md:hidden">
            <img src={profile_img2} alt="profile_img" className="h-[55vh] min-w-[40vh] rounded-xl"/>
          </div>

          <div className="flex flex-col gap-14 max-md:-mt-8">
            <div className="flex flex-col gap-8 font-medium text-lg">
              <p className="max-md:">I am a passionate Frontend Developer focused on creating intuitive, responsive web designs. Eager to learn and innovate. My journey in web development is driven by a desire to blend aesthetics with functionality, ensuring users enjoy smooth and engaging experiences.</p>
              <p>I aim to create engaging and responsive web experiences. Eager to learn and contribute, I am excited to collaborate on innovative projects.</p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-11 transform transition-transform duration-300 ease hover:scale-x-105">
                <p className="min-w-24 text-xl font-semibold max-md:text-lg">HTML</p> 
                <hr className="w-[90%] outline-none border-none bg-custom-gradient-button h-2 rounded-full"/>
              </div>

              <div className="flex items-center gap-11 transition-transform duration-100 ease hover:scale-x-105">
                <p className="min-w-24 text-xl font-semibold max-md:text-lg">CSS</p> 
                <hr className="w-[70%] outline-none border-none bg-custom-gradient-button h-2 rounded-full"/>
              </div>

              <div className="flex items-center gap-11 transition-transform duration-100 ease hover:scale-x-105">
                <p className="min-w-24 text-xl font-semibold max-md:text-lg">JavaScript</p> 
                <hr className="w-[75%] outline-none border-none bg-custom-gradient-button h-2 rounded-full"/>
              </div>
              
              <div className="flex items-center gap-11 transition-transform duration-100 ease hover:scale-x-105">
                <p className="min-w-24 text-xl font-semibold max-md:text-lg">ReactJs</p> 
                <hr className="w-[50%] outline-none border-none bg-custom-gradient-button h-2 rounded-full"/>
              </div>
              </div>
          </div>
        </div>

        <div className="flex justify-around w-full mt-8 mb-16 max-md:justify-between">
          <div className="flex flex-col items-center gap-3 transform transition-transform duration-500 ease-in hover:scale-110">
            <h1 className="bg-custom-gradient-exp backdrop-bg-clip-text font-semibold text-5xl max-md:text-4xl">1.5+</h1>
            <p className="text-lg font-medium max-md:text-md">YEAR OF LEARNING</p>
          </div>
          <hr/>
          <div className="flex flex-col items-center gap-3 transform transition-transform duration-500 ease-in hover:scale-110">
            <h1 className="bg-custom-gradient-exp backdrop-bg-clip-text font-semibold text-5xl max-md:text-4xl">100+</h1>
            <p className="text-lg font-medium max-md:text-md">HOURS OF CODING</p>
          </div>
          <hr />
          <div className="flex flex-col items-center gap-3 transform transition-transform duration-500 ease-in hover:scale-110">
            <h1 className="bg-custom-gradient-exp backdrop-bg-clip-text font-semibold text-5xl max-md:text-4xl">15+</h1>
            <p className="text-lg font-medium max-md:text-md">COMPLETED PROJECTS</p>
          </div>
        </div>
    </div>
  )
}

export default About