import "./ATSAnalysis.jsx";

function ProgressBar({ hoursPerWeek, setHoursPerWeek, weeks }) {
  return (
    <div className="progress-block">
      <div className="slider-row">
        <span>Hours you can study / week</span>
        <input
          type="range"
          min="1"
          max="40"
          value={hoursPerWeek}
          onChange={(e) => setHoursPerWeek(Number(e.target.value))}
        />
        <span className="hours-badge">{hoursPerWeek} h/wk</span>
      </div>

      <p>
        At this pace you'll be ready in about <b className="accent">{weeks} weeks</b>.
      </p>
    </div>
  );
}

export default ProgressBar;