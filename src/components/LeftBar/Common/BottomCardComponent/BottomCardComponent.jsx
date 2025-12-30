function BottomCardComponent({ cardTitle,activeTasks,completedTasks,overDueTasks }) {
  return (
    <>
      <div className="card">
        <div className="card-body m-0 p-0">
          <h5 className="card-title">{cardTitle}</h5>

          <span className="d-flex justify-content-between mt-5">
            <p>Active Tasks</p>
            <h6>{activeTasks}</h6>
          </span>

          <span className="d-flex justify-content-between">
            <p>Completed</p>
            <h6>{completedTasks}</h6>
          </span>

          <span className="d-flex justify-content-between">
            <p>Overdue</p>
            <h6 className="color-danger">{overDueTasks}</h6>
          </span>
        </div>
      </div>
    </>
  );
}

export default BottomCardComponent;
