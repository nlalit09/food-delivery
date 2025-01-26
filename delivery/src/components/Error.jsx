import {useRouteError} from "react-router-dom";

function Error(){
    const err=useRouteError();
    return(
            <>
                <h1>Please enter correct URL</h1>
                <h2>Please enter a valid Url</h2>
            </>

    )
}
export default Error
