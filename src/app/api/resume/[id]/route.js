import { NextResponse } from "next/server";
import { helpers } from "../../services/helpers";
import { resume } from "../../services/resume";

export async function GET(_request, { params }) {
  try {
    const { id } = params;
    const findResumes = await resume.findResumeById(id);
    if (!findResumes) {
      return helpers.itemNoExist("Resumes");
    }
    return NextResponse.json(findResumes, { status: 200 });
  } catch (error) {
    return helpers.catchError(error);
  }
}

export async function DELETE(_request, { params }) {
  try {
    const { id } = params;
    const deleteResume = await resume.delete(id);

    if (!deleteResume) {
      return helpers.itemNoExist("Resume");
    }
    return NextResponse.json({ message: "resume DELETED" });
  } catch (error) {
    console.log(error);
    return helpers.catchError(error);
  }
}
