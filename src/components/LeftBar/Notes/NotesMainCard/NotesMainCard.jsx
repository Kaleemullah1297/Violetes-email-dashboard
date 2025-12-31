import Button from "../../Common/Button/Button"

function NotesMainCard() {
  return (
    <>
      <div className="card h-100">
        <div className="card-body m-0 p-0">
            <div className="d-flex justify-content-between">
            <div
              className="search-wrapper w-75"
              style={{ position: "relative" }}
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search contacts..."
                style={{ paddingLeft: "30px" }} // leave space for icon
              />
              <i
                className="bi bi-search"
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#aaa",
                }}
              ></i>
            </div>
            <Button text="New Note" onClick={()=>alert("Please Create a New Contact:")}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotesMainCard;