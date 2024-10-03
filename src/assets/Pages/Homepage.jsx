import { useState, useEffect } from "react";
import axios from 'axios';
import { CardDefault } from "../Components/Card";
import NavBar from "../Components/NavBar";
import ContentSide from "../Components/ContentSide";
import Experience from "../Components/Experience";
import About from "../Components/About";
import Resume from "../Components/Resume";
import GitHubRepos from "../Components/Github";

const HomePage = () => {
  const [experienceData, setExperienceData] = useState({ years: 0, experience: 0 })
  const [isClicked, setIsClicked] = useState(false)

  function incrementExperienceData(obj) {
    let doubledObj = {};

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        doubledObj[key] = obj[key] * 2;
      }
    }

    return doubledObj;
  }


  const fetchData = async () => {
    try{
      let restfuldata = await axios.get("https://github.com/l-tting?tab=repositories")
      return restfuldata.data
    }
    catch(error){
      console.log(error)

    }
   
  }
const updatedState= async ()=>{
  const data = await fetchData()
  console.log(data)
  setExperienceData({
    years:0,
    experience:data.length
  })
}

useEffect( ()=>{
  updatedState()
})


  useEffect(() => {
    let updatedState = incrementExperienceData(experienceData);
    console.log(updatedState)

    setExperienceData(updatedState)
  }, [isClicked])

  return (

    <div className="flex">

      <CardDefault setIsClicked={setIsClicked} isClicked={isClicked} />

      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <ContentSide />
          <Experience experienceData={experienceData} />
          <About/>
          <Resume/>

          <div>
         <GitHubRepos/>

          </div>
        </div>
      </div>
    </div>



  )
}
export default HomePage;