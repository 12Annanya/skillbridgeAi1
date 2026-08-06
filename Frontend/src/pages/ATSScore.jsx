import "./ATSScore.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaFileAlt,
  FaCode,
  FaComments,
} from "react-icons/fa";

const cards = [
  {
    title: "ATS Score",
    key: "atsScore",
    icon: <FaRobot />,
    color: "#10b981",
  },
  {
    title: "Resume Score",
    key: "resumeScore",
    icon: <FaFileAlt />,
    color: "#3b82f6",
  },
  {
    title: "Technical",
    key: "technicalScore",
    icon: <FaCode />,
    color: "#8b5cf6",
  },
  {
    title: "Communication",
    key: "communicationScore",
    icon: <FaComments />,
    color: "#f59e0b",
  },
];

export default function ATSScore({ data }) {
  return (
    <div className="ats-grid">
      {cards.map((card, index) => (
        <motion.div
          className="ats-card"
          key={index}
          whileHover={{
            scale: 1.05,
            y: -8,
          }}
        >
          <div
            className="ats-icon"
            style={{
              background: card.color,
            }}
          >
            {card.icon}
          </div>

          <h3>{card.title}</h3>

          <h1>
            <CountUp
              end={data[card.key] || 0}
              duration={2}
            />
            %
          </h1>

          <div className="progress-bg">
            <div
              className="progress-fill"
              style={{
                width: `${data[card.key] || 0}%`,
                background: card.color,
              }}
            ></div>
          </div>

          <p>
            {data[card.key] >= 80
              ? "Excellent"
              : data[card.key] >= 60
              ? "Good"
              : "Needs Improvement"}
          </p>
        </motion.div>
      ))}
    </div>
  );
}