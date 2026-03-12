import { NextRequest, NextResponse } from "next/server";
export default function middleware(request: NextRequest){
    const response = NextResponse.next()
    const themeCookie = request.cookies.get('theme');
    if(!themeCookie){
        response.cookies.set('theme', 'light')
    }
    console.log(response)
    return themeCookie
}

export const config = {
    matcher: '/dashboard'
}