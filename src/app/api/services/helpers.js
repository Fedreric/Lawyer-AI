import { NextResponse } from "next/server";
import { headers } from 'next/headers'

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
    },
    searchToken: ()=>{
      const headersList = headers()
      return headersList.get('x-token')
    }
}