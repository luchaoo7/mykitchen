import React from 'react'

const MyFooter = () => {

    return (
        <footer className="container-fluid text-center">
            <p>Online Store Copyright</p>  
            <form className="form-inline">
                Get deals:
                <input type="email" class="form-control" size="50" placeholder="Email Address" />
                <button type="button" class="btn btn-danger">Sign Up</button>
            </form>
        </footer>
    )
}

export default MyFooter;