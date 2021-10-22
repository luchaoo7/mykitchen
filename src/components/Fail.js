import React from "react";

const Fail = () =>  {

    const style = {

        "border-radius":"200px",
        "height":"200px", 
        "width":"200px", 
        "background":"#F8FAF5",
        "margin":"0 auto"
    }

    return (
        <div className="successFailDiv">
            <div className="successFailCard">
                <div style={style}>
                    <i className="cross">&#x2717;</i>
                </div>
                <h1 className="failH1">Failed</h1> 
                <p className="successFailP">Your purchase request has failed;<br/> we'll be in touch shortly!</p>
            </div>
        </div>
    )
}

export default Fail;