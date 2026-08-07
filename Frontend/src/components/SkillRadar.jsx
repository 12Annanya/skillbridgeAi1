import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

import "./SkillRadar.css";


const SkillRadar = ({ data }) => {

  const skills = [
    { skill: "React", value: data?.react || 90 },
    { skill: "Java", value: data?.java || 80 },
    { skill: "DSA", value: data?.dsa || 85 },
    { skill: "DBMS", value: data?.dbms || 75 },
    { skill: "System Design", value: data?.system || 70 }
  ];


  return (
    <div className="radar-box">

      <h2>Skill Radar</h2>

      <RadarChart width={400} height={300} data={skills}>

        <PolarGrid />

        <PolarAngleAxis dataKey="skill" />

        <PolarRadiusAxis />

        <Radar
          dataKey="value"
          fillOpacity={0.6}
        />

      </RadarChart>

    </div>
  );
};


export default SkillRadar;