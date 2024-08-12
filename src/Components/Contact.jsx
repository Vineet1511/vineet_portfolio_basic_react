import theme_pattern from "../assets/theme_pattern.svg"
import mail_icon from "../assets/mail_icon.svg"
import location_icon from "../assets/location_icon.svg"
import call_icon from "../assets/call_icon.svg"

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", import.meta.env.VITE_API_KEY);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch(import.meta.env.VITE_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
    <div id="contact" className="flex flex-col items-center justify-center gap-20 my-24 max-md:items-start max-md:mx-10 max-md:gap-14">
        <div className="relative">
            <h1 className="text-6xl font-semibold text-center max-md:text-[2.5rem]">Get in touch</h1>
            <img src={theme_pattern} alt="theme" className="absolute h-14 top-3 left-40 -z-10 max-md:h-10 max-md:left-28"/>
        </div>

        <div className="flex justify-center gap-32 max-md:flex-col max-md:gap-20">
            <div className="flex flex-col gap-9 w-1/3 max-md:w-[70vw]">
                <h1 className="text-5xl font-semibold bg-custom-gradient-contact backdrop-bg-clip-text max-md:text-4xl">{`Let's talk`}</h1>
                <p className="text-md text-slate-200 leading-relaxed">{`I'm eager to take on exciting new projects. If you have something in mind, don’t hesitate to reach out. Let's create something amazing together.`}
                </p>

                <div className="flex flex-col gap-6 text-slate-200 text-md max-md:gap-10">
                    <div className="flex items-center gap-6">
                        <img src={mail_icon} alt="mail_icon" className="h-6 min-w-8"/>
                        <p>vineetsonkar1511@gmail.com</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <img src={location_icon} alt="location_icon" className="h-6 min-w-8"/>
                        <p>Ranjhi, Jabalpur, M.P. India</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <img src={call_icon} alt="call_icon" className="h-6 min-w-8"/>
                        <p>+91-93401 99726</p>
                    </div>
                </div>
            </div>

            <form className="flex flex-col items-start gap-3 w-1/2 max-md:w-full" onSubmit={onSubmit}>
                <label htmlFor="" className="text-slate-200 text-md font-medium">Your Name</label>
                <input type="text" placeholder="Enter Your Name" name="name" className="border-none w-full h-16 pl-5 rounded-md bg-[#32323c] placeholder:opacity-60 placeholder:text-lg text-[#A0A0A0] max-md:w-[85vw]" required/>

                <label className="text-slate-200 text-md font-medium">Your Email</label>
                <input type="email" placeholder="Enter Your Email" name="email" className="border-none w-full h-16 pl-5 rounded-md bg-[#32323c] placeholder:opacity-60 placeholder:text-lg text-[#A0A0A0] max-md:w-[85vw]" required/>

                <label htmlFor="" className="text-slate-200 text-md font-medium">Write Your Message </label>
                <textarea name="message" rows="8" placeholder="Enter Your Message" className="border-none w-full pl-5 pt-5 rounded-md bg-[#32323c] placeholder:opacity-60 placeholder:text-lg text-[#A0A0A0]" required>
                </textarea>
                
                <button type="submit" className="border-none text-white rounded-full bg-custom-gradient-card-submit px-9 py-3 cursor-pointer mt-4 text-lg font-medium transform transition-transform duration-300 ease-in hover:scale-110">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact