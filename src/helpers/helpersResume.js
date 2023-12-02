export async function getResumes(id) {
  try {
    const res = await fetch("/api/resume/" + id);
    if (!res.ok) throw new Error("Resumes not found");
    const list = await res.json();
    return list;
  } catch (error) {
    console.log(error);
  }
}

export async function download({ resume, data }) {
  const res = await fetch("/api/download", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json"
    }
  });

  if (!res.ok) throw new Error("Failed");

  const url = `/${resume.name}`;
  const link = document.createElement("a");
  link.href = url;
  link.download = `${resume.name}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  return res;
}

export async function deleteResume(id) {
  const res = await fetch("/api/resume/" + id, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    }
  });
  if (!res.ok) throw new Error("Failed");

  return res;
}
