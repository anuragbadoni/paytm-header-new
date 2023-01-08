import BarIcon from "./icons/BarIcon";
import CrossIcon from "./icons/CrossIcon";

const Dropdown = (props) => {
    return (
        <>
            <button className="relative right-8 sm:static md:hidden ml-10 mr-0" onClick={props.clicked}>

             {props.icon ?   <BarIcon />  : <CrossIcon/>}
 
            </button>
        </>
    );
};
export default Dropdown;

