
import PropTypes from 'prop-types';

TopRatedrestaurant.propTypes= {
    searchTopRated:PropTypes.func
    
}
function TopRatedrestaurant(props){
   
    return(
        <>
        <div className="topratedrestaurant">
        <button onClick={props.searchTopRated}>Topratedrestaurants</button>
        </div>
        </>

    )
}
export default TopRatedrestaurant