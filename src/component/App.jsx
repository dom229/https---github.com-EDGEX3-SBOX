import {useEffect,useState} from "react";
import {TOGGLEBAR,LODING,} from "../imports/imports";
import {invoke} from "@tauri-apps/api";
import "../scss/css/style.css";
function App() {
  const [loding,setloding] = useState(false);
  useEffect(window.onload=()=>{
     setTimeout(()=>{
      invoke('close_splashscreen')
      setloding(true);
     },9000)
  },[])
  return(
    <>
    {
      (!loding)?(
        <div className="loader-c">
           <LODING/>
        </div>
      ):(
        <div className="main-container">
          <TOGGLEBAR/>
        </div>
      )
    }
    </>
  )
}

export default App;
