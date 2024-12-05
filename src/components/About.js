
import React from "react";
// import User from "./User";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("1. Parent's constructor.");
    }

    componentDidMount(){
        console.log("6. Parent's did mount.");
    }

    componentWillUnmount(){
        //called when we're leaving the component
        console.log(`8. Parent's will unmount.`);
    }//componentWillUnmount


    render(){
        console.log("2. Parent's render.");

        return( 
            <div>
                <UserContext.Consumer>
                    {
                        ({user}) => (<h1 className="text-xl font-bold">LoggedIn User: {user}</h1>)
                    }
                </UserContext.Consumer>
                <h2 className="font-bold text-slate-700 m-4">ABOUT US</h2>
                {/* <User/> */}
            </div>
            )
    }//render
}

export default About;