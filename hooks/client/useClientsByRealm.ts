import { getClientsByRealm } from "@api/client"
import { useQuery } from "react-query"

export default function useClientsByRealm(realm: string) {
    return useQuery(
        ["realm", realm, "clients"],
        () => getClientsByRealm(realm),
        { enabled: !!realm }
    )
}
