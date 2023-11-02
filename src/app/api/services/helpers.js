import { NextResponse } from "next/server";

export const helpers = {
    itemNoExist: (item) =>{
        return NextResponse.json(
            {
              message: item +" not found"
            },
            { status: 404 }
          ); 
    },
    catchError: (error) =>{
        return NextResponse.json(
            {
              message: error.message
            },
            { status: 500 }
          );
    }
}