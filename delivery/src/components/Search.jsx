
import PropTypes from 'prop-types';
import {useState} from 'react'
Search.propTypes= {
    searchFunction:PropTypes.func
    
}
function Search(props){

  const [searchText,updateSearchText]=useState("");
  function filterRestaurant(){
    props.searchFunction(searchText);
  }

    return(

        <div className="search">
            <input type="text" onChange={(e) => updateSearchText(e.target.value)}/>
            <button className="searchButton" onClick={filterRestaurant} >Search</button>

        </div>

    )
}
export default Search