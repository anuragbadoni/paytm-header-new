const Signin = (props) => {
    return (
        <div className={` items-center bg-blue-500 rounded-3xl h-8  md:h-10 mr-1 sm:mr-10 w-26 sm:w-auto flex hover:bg-blue-900 ${ props.display ? "visible" : "hidden"} `}>
            <span className=" mr-3 ml-5 text-white text-xs md:text-base  ">Sign In</span>

            <img
                className="mr-2 h-6 md:h-auto"
                src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/loginImg.svg"
                alt=""
            />

        </div>
    );
};

export default Signin;
