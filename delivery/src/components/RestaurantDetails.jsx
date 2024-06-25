import { useParams } from "react-router-dom"
function RestaurantDetails(){
    const params=useParams();
    console.log("params",params.resId);
    return(
        <>
        <h1>Restaurant Details</h1>
        </>
    )
}
export default RestaurantDetails