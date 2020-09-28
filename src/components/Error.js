import React from "react";
import '../style/Error.css'


const Error = ({error}) => (

    <div className="alert alert-danger" role="alert">
        {error}
    </div>

)

export default Error