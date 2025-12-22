import './ProgressBar.css'

function ProgressBar({ progress }) {
  return (
    <div
      style={{
        background: "#e0e0e0",
        borderRadius: "8px",
        height: "15px",
        width: "100%",
      }}
    >
      <div className="progressBar"
        style={{
          width: `${progress}%`,
          height: "100%",
          borderRadius: "8px",
          textAlign: "center",
          color: "white",
          lineHeight: "20px",
          transition: "width 0.3s",
        }}
      >
      </div>
    </div>
  );
}

export default ProgressBar;
