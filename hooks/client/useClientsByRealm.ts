import { getClientsByRealm } from "@api/client"
import { useQuery } from "react-query"

export default function useClientsByRealm(realm: string) {
    return useQuery(
        ["realms", realm, "clients"],
        () => getClientsByRealm(realm),
        { enabled: !!realm }
    )
}
