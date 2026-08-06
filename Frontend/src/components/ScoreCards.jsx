import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

const cards = [
  {
    title: "Overall Score",
    value: 82,
    color: "#7c3aed",
  },
  {
    title: "ATS Score",
    value: 91,
    color: "#22c55e",
  },
  {
    title: "Technical",
    value: 76,
    color: "#3b82f6",
  },
  {
    title: "Projects",
    value: 69,
    color: "#f59e0b",
  },
];

export default function ScoreCards() {
  return (
    <div className="score-grid">
      {cards.map((card) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="score-box"
          key={card.title}
        >
          <CircularProgressbar
            value={card.value}
            text={<CountUp end={card.value} duration={2} suffix="%" />}
            styles={buildStyles({
              pathColor: card.color,
              textColor: "#fff",
              trailColor: "#23304d",
            })}
          />

          <h3>{card.title}</h3>
        </motion.div>
      ))}
    </div>
  );
}