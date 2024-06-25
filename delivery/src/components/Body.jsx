import Restaurantcard from './Restaurantcard.jsx'
import {resdetails} from '../utils/Imagesdata'
import Search from './Search'
import TopRatedrestaurant from './TopRatedRestaurant.jsx'
import {useState} from 'react'
import './Body.css'
import { Link } from 'react-router-dom'
function Body(){

    const [filteredrestaurant,setFilterRestaurant]= useState(resdetails);
    const[isTopRated,setIsTopRated]=useState(false);
   
    function searchRestaurants(searchText){
        let searchRestaurants=resdetails.filter(res=>res.Name.toUpperCase().includes(searchText.toUpperCase()));
        
        setFilterRestaurant(searchRestaurants);
        console.log("Filtered", filteredrestaurant);
       
    }
    function searchRatedrestaurant(){
            let searchRatedrestaurant=filteredrestaurant.filter(res=>parseFloat(res.rating)>4.5);
            setFilterRestaurant(searchRatedrestaurant);
            
    }
    
    return(
        
<>
        <div class="filtering">
        <Search searchFunction= {searchRestaurants}/>
        <TopRatedrestaurant searchTopRated={searchRatedrestaurant}/>
        </div>
        <div className="card-container">
        
       {
            filteredrestaurant.map(res=> <Link to={"/restaurant/"+res.id} >
            <Restaurantcard key={res.id} resDetails={res} /></Link>)

       }
   
        </div>
        </>
    )
}
export default Body