import React, { useState } from "react";
import Logo from "./Logo";
import Links from "./Links";
import Signin from "./Signin";
import Dropdown from "./Dropdown_btn"
import Sidemenu from "./DropDownMenu";


const Navbar = () => {
    const [dropDownMenu, setDropDownMenu] = useState(false);
    const [icon, setIcon] = useState(true);
    const [signInDisplay, setSignInDisplay] = useState(true);

    const drop = () => {
        dropDownMenu ? setDropDownMenu(false) : setDropDownMenu(true);
        signInDisplay ? setSignInDisplay(false) : setSignInDisplay(true);
        icon ? setIcon(false) : setIcon(true);
    };

    return (
        <>
            <div className=" flex h-16 md:h-24 bg-white  justify-between items-center shadow-md">
                <Dropdown clicked={drop} icon={icon} />
                <Logo />
                <Links />
                <Signin display={signInDisplay} />
            </div>
            <Sidemenu display={dropDownMenu} />
        </>
    );
};

export default Navbar;
