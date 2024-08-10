import theme_pattern from "../assets/theme_pattern.svg"
import mywork_data from "../assets/mywork_data"
import arrow_icon from "../assets/arrow_icon.svg"

const MyWork = () => {
  return (
    <div id="work" className="flex flex-col items-center justify-center gap-20 mx-32 my-28 max-md:items-start max-md:mx-10">
        <div className="relative">
            <h1 className="text-6xl font-semibold max-md:text-[2.5rem]">Latest Work</h1>
            <img src={theme_pattern} alt="theme" className="absolute h-14 top-3 left-[17rem] -z-10 max-md:h-10 max-md:left-28"/>
        </div>

        <div className="grid grid-cols-3 gap-10 max-md:grid-cols-2 max-md:gap-6">
            {mywork_data.map((work, index) =>{
                return <img src={work.w_img} className="h-60 w-96 rounded-2xl box-border cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:border-4 border-fuchsia-500 hover:rounded-xl max-md:h-28" alt="work_img" key={index}/>
            })}
        </div>

        <div className="flex items-center gap-4 rounded-full border-2 border-white px-9 py-4 cursor-pointer font-medium transform transition-all ease-in-out hover:duration-700 hover:gap-7 max-md:mx-auto ">
            <p className="text-xl max-md:text-lg">Show More</p>
            <img src={arrow_icon} className="h-5 max-md:h-4" alt="arrow-img" />
        </div>
    </div>
  )
}

export default MyWork