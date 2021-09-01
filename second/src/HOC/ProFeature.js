import React, { Component } from 'react'


export default function ProFeature(props) {
    if (props.pro) {
        return props.render("Pro Feature");
    }
    else {
        return (
            <div className="bg-warning text-white text-center">
                <h4>This is from Pro Feature else</h4>
            </div>
        )
    }
}


// export default function ProFeature(FeatureComponent) {


//     return function(props){

//         if(props.pro){
//             let {pro,...childProps}=props
//             return <FeatureComponent {...childProps}/>
//         }
//         else{
//             return(
//                 <div className="bg-warning text-white text-center">
//                     <h4>This is from Pro Feature else</h4>
//                 </div>
//             )
//         }
//     }

// }
