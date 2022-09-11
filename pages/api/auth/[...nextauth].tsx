import { login } from "@api/auth"
import { GRANT_TYPE, SCOPES } from "@constants/auth.constant"
import { environment } from "@lib/environment"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            async authorize(credentials) {
                const { username, password } = credentials as {
                    username: string
                    password: string
                }

                try {
                    const response = await login({
                        grant_type: GRANT_TYPE,
                        username,
                        password,
                        client_id: environment.client,
                        scope: SCOPES,
                    })

                    return { ...response.data.data }
                } catch (error) {
                    console.log(error)
                    throw new Error("invalid credentials")
                }
            },
            credentials: {},
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                return {
                    access_token: user.access_token,
                    refresh_token: user.refresh_token,
                    expires_in:
                        Date.now() + (Number(user.expires_in) - 60) * 1000,
                }
            }

            const hasAccessTokenExpired = Number(token.expires_in) < Date.now()
            console.log({ hasAccessTokenExpired })

            return token
        },
        session: async ({ session, token }) => {
            session.access_token = token.access_token
            session.refresh_token = token.refresh_token
            session.expires_in = token.expires_in

            return session
        },
    },
    pages: {
        signIn: "/login",
    },
})
