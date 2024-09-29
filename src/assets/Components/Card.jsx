import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function CardDefault({setIsClicked,isClicked}) {
    const updateState =(e)=>{
        console.log("Is Clicked")
        setIsClicked(!isClicked)

    }

    return (
        <Card className=" ml-2 w-[30%] sm:w-full md:w-[40%] lg:w-[40%] xl:w-[40%] 2xl:w-[40%] bg-[#1F1F1F] border-[#999999]">

        <CardHeader color="blue-gray" className="relative h-24">
  
          <Typography className="text-white text-[0.5rem] font-bold mb-2 text-center">
  
            LETTING
  
          </Typography>
  
          <img
            className="rounded-xl w-28 ml-2"
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
  
  
  
        </CardHeader>
        <CardBody >
          <Typography variant="h5" color="blue-gray" className="mb-1 text-white text-[15%] text-center leading-3">
            hello@letting.design <br />
            Based in Narobi Kenya
          </Typography>
          <div className="flex text-[#999999] ">
            <span className="text-[0.4rem] ml-2 mt-1"><i class="fa-solid fa-copyright"></i></span>
            <div >
              <Typography className="text-[0.4rem] ml-1 mt-1">
                2022 Letting.All Rights Reserved
  
              </Typography>
  
            </div>
          
  
          </div>
          <div className="text-[0.6rem] mt-2 text-center space-x-3">
             <span className=" rounded-[50%] border-[#999999] text-[#999999]"> <i class="fa-brands fa-twitter"></i></span>
             <span className=" rounded-[50%] border-[#999999] text-[#999999]"><i class="fa-solid fa-basketball"></i></span>
             <span className=" rounded-[50%] border-[#999999] text-[#999999]"><i class="fa-brands fa-instagram"></i></span>
             <span className="rounded-[50%] border-[#999999] text-[#999999]"> <i class="fa-brands fa-github"></i></span>
  
            </div>
  
        </CardBody>
        <CardFooter className="pt-0 mt-1 text-center ">
          <div >
          <Button className="h-4 text-[0.5rem] text-black bg-[#28E98C] border-[#28E98C]" onClick={updateState}>
  
          <i class="fa-solid fa-envelope"></i>
  
            Hire Me!</Button>
          </div>
        </CardFooter>
      </Card>
    );
  }