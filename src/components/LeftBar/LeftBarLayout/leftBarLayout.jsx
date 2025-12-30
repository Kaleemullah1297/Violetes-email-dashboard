import "./leftBarLayout.css";

function LeftBarLayout({
  mainTitle,
  description,
  mainContent,
  topContent,
  bottomContent,
}) {
  return (
    <>
      <div className="container leftbar-layout">
        <div className="leftbar-layout-header ms-3 mt-4">
          <h2 className="m-0 p-0">{mainTitle}</h2>
          <p>{description}</p>
          <div className="row mt-5">
            <div className="col-8">{mainContent}</div>
            <div className="col-4">
              <div className="mb-3">{topContent}</div>
              <div>{bottomContent}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftBarLayout;
