export const environment = {
    environment: process.env.NEXT_PUBLIC_ENVIRONMENT!,
    isProduction: process.env.NEXT_PUBLIC_ENVIRONMENT! === "production",
    base_url: process.env.NEXT_PUBLIC_IDP_BASE_URL,
    realm: process.env.NEXT_PUBLIC_REALM_ID,
    client: process.env.NEXT_PUBLIC_CLIENT_ID,
}
