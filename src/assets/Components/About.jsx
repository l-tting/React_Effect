const About = () => {
    return (
        <div>
        <div className="border w-10 h-3 rounded-xl mt-16 ml-8">
            <div className="text-white flex text-[0.3rem] mt-0.5 font-light">
                <span className="ml-1.5"><i class="fa-regular fa-user"></i></span>
                <p className="ml-1">ABOUT</p>
               
            </div>
            
        </div>
        <div className="text-white text-[1rem] ml-8 mt-4">
            <p>Every great design begin with</p>
            <p>an even <span className="text-[#28E98C]">better story</span> </p>
        </div>
        <div className="text-[#999999] text-[0.35rem] leading-3 ml-8 mt-2">
            <p>Since beginning my journey as a freelance designer nearly 8 years ago, I've</p>
            <p>done remote work for agencies, consulted for startups, and collaborated with</p>
            <p>talented people to create digital products for both business and consumer use.</p>
            <p>I'm quietly confident, naturally curious, and perpetually working on improving</p>
            <p>my chopsone design problem at a time.</p>
        </div>
        </div>
    )
}
export default About;