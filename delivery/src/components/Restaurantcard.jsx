
import {image1} from '../utils/Imagesdata'

function Restaurantcard(props){
    console.log("props",props);
    const {imageid,Name,rating,time,cusine,location}=props.resDetails;
    return(
        <>
        <div className="restcontainer" >
        
          <img src={`${image1}${imageid}`} height="180px" width="180px" />
          <span className='name-section'><strong>{Name}</strong></span>
            <span>{rating}</span>
            <span className="time-section">{time}</span>
            <span className="cusine-section">{cusine}</span>
            <span className="location-section">{location}</span>
           </div>
          
        </>
    )
}
export default Restaurantcard;