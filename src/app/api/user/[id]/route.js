import { NextResponse } from "next/server";
import { user } from "../../services/user";
import { helpers } from "../../services/helpers";


export async function GET(_request, { params }) {
  try {
    const { id } = params;
    const findUser = await user.findOneUser(id);
    if (!findUser) {
      return helpers.itemNoExist('User');
    }
    return NextResponse.json(findUser, { status: 200 });
  } catch (error) {
    return helpers.catchError(error);
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { name, email, password } = await request.json();
    const updatedUser = await user.update({ name, email, password, id });
    if (!updatedUser) {
      return helpers.itemNoExist('User');
    }
    return NextResponse.json(updatedUser);
  } catch (error) {
    return helpers.catchError(error);
  }
}

export async function DELETE(_request, { params }) {
  try {
    const { id } = params;
    const deleteUser = await user.delete(id);
    
    if (!deleteUser) {
        return helpers.itemNoExist('User');
    }
    return NextResponse.json({ message: "User DELETED" });
  } catch (error) {
    console.log(error)
    return helpers.catchError(error);
  }
}
