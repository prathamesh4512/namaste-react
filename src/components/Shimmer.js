import React from "react";

const Shimmer = () => {

    return( 
        <div className="shimmer_container">
            {
                Array(15).fill(1).map((_,idx)=>(
                    <div className="shimmer_card" key={idx}/>
                ))
            }
        </div>
    )
}

export default Shimmer;