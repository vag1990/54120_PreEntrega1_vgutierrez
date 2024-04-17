import CartWidget from "./CartWidget";
import NavLinks from "./NavLinks";
import "./NavBar.css";

 

 function NavBar () {
    return (
        <div className="navbarEstilo">
            <NavLinks />
            <CartWidget />

        </div>
    )
 }

 export default NavBar;