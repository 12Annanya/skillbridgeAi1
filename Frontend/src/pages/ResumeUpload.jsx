import "./ResumeUpload.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaCloudUploadAlt,
  FaFilePdf,
  FaImage,
  FaSpinner,
} from "react-icons/fa";

function ResumeUpload() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [resumeText, setResumeText] = useState("");
  const [role, setRole] = useState("Frontend Developer");

  // Loading state
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    const selected = e.target.files[0];

    if (!selected) return;

    setFile(selected);
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result.split(",")[1]);
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  };

  const analyzeResume = async () => {
    if (!file && resumeText.trim() === "") {
      alert("Upload resume or paste resume text.");
      return;
    }

    try {
      // Start loading
      setLoading(true);

      let resumeFileBase64 = null;

      if (file) {
        resumeFileBase64 = await fileToBase64(file);
      }

      console.log("Sending Resume:", {
        resumeText,
        resumeFileBase64,
        role,
      });

      // CALL BACKEND
      const response = await fetch(
        "http://localhost:5000/api/analyze",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            resumeText,
            resumeFileBase64,
            role,
          }),
        }
      );

      const data = await response.json();

      console.log("AI RESPONSE:", data);

      if (!response.ok || data.error) {
        throw new Error(
          data.error || "Failed to analyze resume"
        );
      }

      // Save result and navigate
      navigate("/analysis", {
        state: {
          resumeText,
          resumeFileBase64,
          role,
          analysisData: data,
        },
      });
    } catch (error) {
      console.error("Analysis Error:", error);

      alert(
        error.message ||
          "Something went wrong while analyzing your resume."
      );
    } finally {
      // Stop loading
      setLoading(false);
    }
  };

  return (
    <div className="resume-page">
      <div className="resume-container">

        <h1>
          Add your resume
        </h1>

        <div className="upload-card">

          <h2>
            1. Resume Input
          </h2>

          <span>
            Upload PDF/Image or paste resume text.
          </span>

          {/* ================= UPLOAD ================= */}

          <label className="dropzone">

            <input
              type="file"
              accept=".pdf,.png,.jpg,.jpeg"
              hidden
              onChange={handleFile}
              disabled={loading}
            />

            <FaCloudUploadAlt className="uploadIcon" />

            <h3>
              Drop resume here or click to browse
            </h3>

            <small>
              PDF • JPG • PNG
            </small>

          </label>

          {/* ================= SELECTED FILE ================= */}

          {file && (
            <div className="selectedFile">

              {file.type.includes("pdf") ? (
                <FaFilePdf />
              ) : (
                <FaImage />
              )}

              <span>
                {file.name}
              </span>

            </div>
          )}

          {/* ================= TEXT ================= */}

          <div className="divider">
            OR PASTE TEXT
          </div>

          <textarea
            rows="8"
            placeholder="Paste your resume here..."
            value={resumeText}
            onChange={(e) =>
              setResumeText(e.target.value)
            }
            disabled={loading}
          />

          {/* ================= ROLE ================= */}

          <label className="roleLabel">
            Target Role
          </label>

          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            disabled={loading}
          >

            <option>
              Frontend Developer
            </option>

            <option>
              Backend Developer
            </option>

            <option>
              Full Stack Developer
            </option>

            <option>
              AI Engineer
            </option>

            <option>
              Machine Learning Engineer
            </option>

            <option>
              Software Engineer
            </option>

          </select>

          {/* ================= ANALYZE BUTTON ================= */}

          <button
            className="analyzeBtn"
            onClick={analyzeResume}
            disabled={loading}
          >

            {loading ? (
              <>
                <FaSpinner className="spinner" />
                Analyzing Resume...
              </>
            ) : (
              <>
                Analyze Resume
              </>
            )}

          </button>

        </div>

      </div>
    </div>
  );
}

export default ResumeUpload;