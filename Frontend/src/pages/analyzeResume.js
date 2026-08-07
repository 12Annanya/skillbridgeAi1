export async function analyzeResume({
  resumeText,
  resumeFileBase64,
  role,
}) {
  const res = await fetch(
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

  const data = await res.json();

  console.log("AI DATA:", data);

  if (data.error) {
    throw new Error(data.error);
  }

  return data;
}

export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result.split(",")[1]);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}