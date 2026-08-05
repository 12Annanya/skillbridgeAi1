function SuggestionCard({ phase }) {
  return (
    <div className="topic-block">
      <h3>{phase.phase} · {phase.weeks}wk · {phase.hours}h</h3>

      {phase.topics.map((t, i) => (
        <div key={i} className="topic-item">
          <h4>{t.skill}</h4>
          <div className="chip-row">
            {t.subtopics.map((sub, j) => (
              <span key={j} className="chip chip-topic">{sub}</span>
            ))}
          </div>
          <p className="asked-by">
            Commonly asked by: <b>{t.askedBy.join(", ")}</b>
          </p>
        </div>
      ))}
    </div>
  );
}

export default SuggestionCard;