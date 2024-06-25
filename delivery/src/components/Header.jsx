
//import { FontAwesomeIcon }from "@fortawesome/react-fontawesome";
//import {faPercent, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import onlineStatus from '../utils/useOnlinestatus'
import { Link } from 'react-router-dom'

export function Header(){
    const onlinestatus = onlineStatus();
    return(
        
        <>
        <nav>
            <img alt="logos" width="150px" height="100px" src="data:image/png;base64,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"/>
            <ul>
                <li>
                    <span>Status :{onlinestatus ? " Online 💚":" Offline💔"}</span>
                </li>
                <li>
                    
                    <span><Link to="/offers">offers</Link></span>
                </li>
                <li>
                    
                    <span><Link to="/help">Help</Link></span>
                </li>
                <li>
                    
                    <span><Link to="/cart">about</Link></span>
                </li>
                <li>
                    
                    
                    <span><a href="/cart">Cart</a></span>
                </li>
                <li>
                    
                    <span>sign in</span>
                </li>
            </ul>
        </nav>
        </>
    )
}