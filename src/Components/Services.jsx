import theme_pattern from "../assets/theme_pattern.svg"
import Services_Data from "../assets/services_data"
import arrow_icon from "../assets/arrow_icon.svg"
const Services = () => {
  return (
    <div id="services" className="flex flex-col items-center justify-center gap-20 mx-28 my-28 max-md:items-start max-md:mx-10 max-md:-mt-10">
        <div className="relative">
            <h1 className="text-6xl font-semibold text-center max-md:text-[2.5rem]">My Services</h1>
            <img src={theme_pattern} alt="theme" className="absolute h-14 top-3 left-[10.8rem] -z-10 max-md:h-10 max-md:left-28"/>
        </div>

        <div className="grid grid-cols-3 gap-6 px-5 max-md:grid-cols-2 max-md:p-0">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="flex justify-center flex-col gap-4 p-6 rounded-lg border-2 border-white cursor-pointer hover:border-fuchsia-500 hover:bg-custom-gradient-card-hover hover:transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold max-md:text-lg">{service.s_no}</h3>
              <h2 className="text-3xl font-bold bg-custom-gradient-card backdrop-bg-clip-text max-md:text-xl">{service.s_name}</h2>
              <p className="text-gray-300 text-lg leading-8 max-w-72 max-md:text-base">{service.s_desc}</p>
              <div className="flex gap-5 items-center mt-3">
                <p className="text-gray-300 text-lg max-md:text-base">Read More...</p>
                <img src={arrow_icon} alt="arrow_icon" className="h-4" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Services