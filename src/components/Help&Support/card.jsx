import "./Card.css";

function HelpAndSupportCard({ icon,title, description, buttonText, onclick }) {
  return (
    <>
      <div className="card h-100  help-and-support p-3">
        <div className="card-body m-0 p-0">
          <div className="d-flex align-items-center mb-3">
            <span>{icon}</span>
            <span >
              <h6 className="card-title m-0 p-0">{title}</h6>
              <small className="card-description m-0 p-0">{description}</small>
            </span>
          </div>
          <button
            className="btn w-100 m-0 p-0 py-1"
            onclick={onclick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
}

export default HelpAndSupportCard;
