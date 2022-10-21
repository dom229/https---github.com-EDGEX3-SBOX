import {appWindow} from "../imports/imports";
import BG from "../assets/icon/icon.svg";
const TOGGLEBAR = () => {
  return (
   <div data-tauri-drag-region  className="titlebar flax">
      <div className="os-opt">
       <div className="logo">
       <img src={BG} />
       </div>
      </div>
      <div className="nav-opt">
        <div className="nav-btn" onClick={()=>{appWindow.minimize()}}></div>
        <div className="nav-btn" onClick={()=>{appWindow.toggleMaximize()}}></div>
        <div className="nav-btn" onClick={()=>{appWindow.close()}}></div>
      </div>
   </div>
  )
}
export default TOGGLEBAR;