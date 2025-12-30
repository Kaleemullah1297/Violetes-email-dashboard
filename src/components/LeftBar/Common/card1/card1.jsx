import "./Card1.css";

function Card1({ cardTitle, rightContent }) {
  return (
    <>
      <div className="card pb-5 h-100">
        <div className="card-body m-0 p-0">

          {/*Card Header*/}
          <div className="d-flex align-items-baseline justify-content-between">
            <h4 className="card-title">{cardTitle}</h4>
            {rightContent}
          </div>


          {/*Card NavTabs*/}
          <ul className="nav nav-pills mt-4 tasks-tabs d-inline-flex">
            <li className="nav-item">
              <button
                className="nav-link active d-flex align-items-center active"
                data-bs-toggle="tab"
                data-bs-target="#today"
              >
                Today
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link d-flex align-items-center"
                data-bs-toggle="tab"
                data-bs-target="#upcomming"
              >
                Upcomming
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link d-flex align-items-center"
                data-bs-toggle="tab"
                data-bs-target="#completed"
              >
                Completed
              </button>
            </li>
          </ul>

          {/*Card Main Area where all the taks will display*/}
        </div>
      </div>
    </>
  );
}

export default Card1;
