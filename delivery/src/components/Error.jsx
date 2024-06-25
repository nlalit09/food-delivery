import {useRouteError} from "react-router-dom";

function Error(){
    const err=useRouteError();
    return(
            <>
                <h1>Please enter correct URL</h1>
            </>

    )
}
export default Error