const NavBar = ()=>{
    return(
        <div className="ml-8 mt-8 flex ">
            <div className="flex text-white text-[0.3rem] border w-full text-center rounded-xl font-light ">
                <span className="mt-1 ml-1"><i class="fa-solid fa-house"></i></span>
                <p className="text-[0.4rem] mt-0.5"> INTRODUCE</p> 
            </div>
            <div className="text-white text-[0.6rem] ml-[127%]">
            <i class="fa-solid fa-bars"></i>
            </div>

        </div>
    )
};
export default NavBar;