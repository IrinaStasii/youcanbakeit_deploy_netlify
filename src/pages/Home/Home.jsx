import React from "react"
import { useNavigate } from "react-router-dom";
import "./home.css"

// const Home = (props) => {
//     const { loggedIn, email } = props;
//     const navigate = useNavigate();
    
//     const onButtonClick = () => {
//         // You'll update this function later
//             // If the user is logged in, log them out
//             if (loggedIn) {
//                 localStorage.removeItem("user")
//                 props.setLoggedIn(false)
//             } else {
//                 navigate("/login");
//                 console.log('user email: ' , email)
//             }
    
//     }

//     return <div className="mainContainer">
//         <div className={"titleContainer"}>
//             <div>Welcome!</div>
//         </div>
//         <div>
//             Do you want to have acces to comment section and courses page? Please Log in
//         </div>
//         <div className={"buttonContainer"}>
//             <input
//                 className={"inputButton"}
//                 type="button"
//                 onClick={onButtonClick}
//                 value={loggedIn ? "Log out" : "Log in"} />
//             {(loggedIn ? <div>
//                 Your email address is {email}
//             </div> : <div/>)}
//         </div>


//     </div>
// }

const Home = () => {
    return (
        <div className="homePageContent">
        <h1>Welcome</h1>
    </div>
    )
  
}

export default Home;