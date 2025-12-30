import ProgressBar from "../../../components/ProgressBar/ProgressBar";

function TopCardComponent({ cardTitle }) {
  return (
    <>
      <div className="card mb-4 pb-4">
        <div className="card-body m-0 p-0">
          <h5 className="card-title mb-5">{cardTitle}</h5>

          <span className="d-flex justify-content-between">
            <small className="mb-1">Today's Tasks</small>
            <h6> 0/3</h6>
          </span>
          <ProgressBar />

          <span className="d-flex justify-content-between mt-3">
            <small className="mb-1">This Week</small>
            <h6> 0/3</h6>
          </span>
          <ProgressBar />
        </div>
      </div>
    </>
  );
}

export default TopCardComponent;
