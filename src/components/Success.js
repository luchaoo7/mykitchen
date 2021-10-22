import React from "react";

const Success = () =>  {

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
                    <i className="checkmark">✓</i>
                </div>
                <h1 className="successH1">Success</h1> 
                <p className="successFailP">We received your purchase request;<br/> we'll be in touch shortly!</p>
            </div>
        </div>
    )
}

export default Success;