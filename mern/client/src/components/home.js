import React, { useEffect, useState } from "react";
import yes1 from "./true/1.png";
import yes2 from "./true/2.png";
import yes3 from "./true/3.png";
import no1 from "./false/1.png"
import no2 from "./false/2.png"
import no3 from "./false/3.png"
import thirdWorlds from "./thirdWorlds.png"
import "./home.css"



export default function Home() {
const [status, setStatus] = useState([]);
useEffect(() => {
  async function getStatus() {
    const response = await fetch(`http://localhost:5050/admin/`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const status = await response.json();
    setStatus(status);
  }
  getStatus();


  return;
}, [status.length]);

function closeIt()
{
  window.scrollTo(0, 0);
}
window.onbeforeunload = closeIt;


function showStatus(){
 const determ = Math.floor(Math.random() * 3) + 1;
  if (status.bool === true){
    if (determ === 1){
      return yes1;
    }
    if (determ === 2){
      return yes2;
    }
    if (determ === 3){
      return yes3;
    }
  } else if (status.bool === false){
    if (determ === 1){
      return no1;
    }
    if (determ === 2){
      return no2;
    }
    if (determ === 3){
      return no3;
    }
  }
};
function writeOut(){
if (status.bool === true){
  return(
    <div className="infoText">
      <h2>Yes, Death Grips is online.</h2>
      <h2>Substantiated by the fact that <a href={status.source} target="_blank" rel="noreferrer">{`${status.reason}`}</a></h2>
      <h2>Raise an issue if the status is outdated.</h2>
    </div>
  )
}
};
function altText(){
  if (status.bool === true){
    return "Yes"
  }
  else{
    return "No"
  }
}

setTimeout(() => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader--hidden");
}, 750)

return (
    <div>
    <div className="loader"><img className="loader::after" alt="Third Worlds logo" style={{height: 120}} src={thirdWorlds}/></div>
      <div className="answerBox">
        <img src={showStatus()} alt={altText()}className="answerImage"></img>
      </div>
      <div className="infoBox">
        {writeOut()}
      </div>
    </div>
  )
}
