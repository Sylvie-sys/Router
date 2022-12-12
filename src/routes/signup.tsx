import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";

type DataDef = {
   
}
const Signup = () => {
    return <div>
        <Header />
        <form action="">

        <input type="text" placeholder="Fullname" />
            <br />
            <input type="text" placeholder="username" />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <input type="password" placeholder="password" />
            <br />
            <button>Create acccount</button>
            <Link to="/login" >Login</Link>
        </form>
    </div>
}
export default Signup;