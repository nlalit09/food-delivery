import { useState } from "react";

const onlineStatus=() =>{

    const[onlinestatus,setonlinestatus]=useState(true);
    window.addEventListener("online",(e)=>{setonlinestatus(true);
    });
    window.addEventListener("offline",(e)=>{setonlinestatus(false);});
    return onlinestatus;
}
export default onlineStatus