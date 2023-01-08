const Sidemenu = (props) => {

    return (
        <div className={`md:hidden flex flex-col items-start gap-7 ${ props.display ? "visible" : "hidden"}` } >
            <div className="mx-8 mb-0 mt-7 font-bold">Investor Relations</div>
            <div className="mx-8 mb-0 mt-5 font-bold"  >Company</div>
            <div className="mx-8 mb-0 mt-6 font-bold"  >Career</div>
        </div>
    );
};

export default Sidemenu;
