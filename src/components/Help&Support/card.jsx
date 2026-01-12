function HelpAndSupportCard({title,description,buttonText,onclick}){
    return(<>

    <div className="card py-2 h-100">
        <div className="card-body m-0 p-0">
            <h6 className="card-title m-0 p-0">{title}</h6>
            <small className="card-descript m-0 p-0">{description}</small>

            <button className="btn btn-outline-success w-100 m-0 p-0 py-1" onclick={onclick}>{buttonText}</button>
        </div>
    </div>
    </>)
}

export default HelpAndSupportCard; 