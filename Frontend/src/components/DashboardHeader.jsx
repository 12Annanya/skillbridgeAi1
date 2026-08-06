import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";
import "./Analysis.css";

export default function DashboardHeader() {
  return (
    <motion.div
      className="dashboard-header"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .8 }}
    >
      <div>
        <h1>
          <FaBrain /> AI Career Analysis
        </h1>

        <p>
          Personalized roadmap generated using your resume and skills.
        </p>
      </div>

      <div className="header-badge">
        Career Ready
      </div>
    </motion.div>
  );
}