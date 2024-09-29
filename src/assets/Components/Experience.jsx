const Experience =({experienceData})=>{
    console.log(experienceData)

    return(
        <div className="flex text-white ml-8">
            <div>
                <p className="text-[0.8rem] text-[#28E98C]">{experienceData?.years}</p>
                <div className="mt-2">
                    <p className="text-[0.4rem] text-[#999999]">YEARS OF</p>
                    <p className="text-[0.4rem] mt-1 text-[#999999]">EXISTENCE</p>
                </div>
            </div>
            <div className="ml-16">
                <p className="text-[0.8rem] text-[#28E98C]">{experienceData?.experience}</p>
                <p className="text-[0.4rem] mt-2 text-[#999999]">PROJECTS COMPLETED ON </p>
                <p className="text-[0.4rem] mt-1 text-[#999999]">15 COUNTRIES </p>
            </div>
        </div>
    )
};
export default Experience;