import { getClientById } from "@api/client"
import { useQuery } from "react-query"

export default function useClient(realmId: string, clientId: string) {
    return useQuery(
        ["clients", clientId],
        () => getClientById(realmId, clientId),
        {
            enabled: !!clientId,
        }
    )
}
