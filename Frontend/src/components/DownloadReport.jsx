function DownloadReport({ data }) {
  const handleDownload = () => {
    const lines = [
      `Readiness Report — ${data.role}`,
      `Readiness: ${data.readinessPercent}%`,
      `Matched Skills: ${data.matchedSkills.map((s) => s.name).join(", ") || "None"}`,
      `Missing Skills: ${data.missingSkills.map((s) => `${s.name} (${s.hours}h)`).join(", ")}`,
      `Total Prep Hours: ${data.totalPrepHours}`,
      "",
      "Study Plan:",
      ...data.studyPlan.map(
        (p) =>
          `- ${p.phase} (${p.weeks}wk, ${p.hours}h): ` +
          p.topics.map((t) => t.skill).join(", ")
      ),
    ];

    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${data.role.replace(/\s+/g, "_")}_readiness_report.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button className="downloadBtn" onClick={handleDownload}>
      Download Report
    </button>
  );
}

export default DownloadReport;