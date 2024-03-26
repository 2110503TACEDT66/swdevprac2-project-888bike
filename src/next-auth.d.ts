import NextAuth from 'next-auth'

declare module "next-auth" {
    interface dataJson{
        success: boolean,
        token: string,
    }
    interface Session {
        user: {
            _id: string,
            name: string,
            email: string,
            role: string,
            token: string,
            uid: string,
            data: dataJson
        }
    }
}