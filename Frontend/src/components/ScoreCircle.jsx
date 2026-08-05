import "./ScoreCircle.css";

function ScoreCircle({ percent }) {
  const circumference = 2 * Math.PI * 70;
  const dash = (percent / 100) * circumference;

  return (
    <div className="ring-wrap">
      <svg width="160" height="160">
        <circle cx="80" cy="80" r="70" className="ring-bg" />
        <circle
          cx="80" cy="80" r="70"
          className="ring-fill"
          strokeDasharray={`${dash} ${circumference}`}
          transform="rotate(-90 80 80)"
        />
      </svg>
      <span className="ring-label">{percent}%</span>
    </div>
  );
}

export default ScoreCircle;