import "./Inbox.css";
//import logo from "../../assets/logo.png";

function InboxComponent({
  name,
  subject,
  description,
  type,
  date,
  displayName,
  imgSrc,
  priority,
}) {
  return (
    <>
      <div className="container-fluid inbox-component">
        <div className="d-flex  mt-3 ">
          <div className="me-3  inbox-component-image">
            {imgSrc ? (
              <img src={imgSrc} alt="name" className="img-fluid inbox-component-image" />
            ) : (
              <span className="text-center">{displayName}</span>
            )}
          </div>
          <div className="w-100">
            <div className="d-flex">
              <h6 className="me-3">{name}</h6>
              {type ? <small className="type px-2">{type}</small> : ""}
              <small className="ms-auto">{date}</small>
            </div>
            <h6 className="m-0 p-0">{subject}</h6>
            <small className="d-block">{description}</small>
            {priority ? (
              <div className="d-flex align-items-center mt-2">
                <i className="fa fa-circle small-dot me-2"></i>
                <small className="priority px-2">{priority}</small>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default InboxComponent;
