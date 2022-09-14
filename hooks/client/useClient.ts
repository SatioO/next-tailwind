import { getClientById } from "@api/client"
import { useQuery } from "react-query"

export default function useClient(clientId: string) {
    return useQuery(["clients", clientId], () => getClientById(clientId), {
        enabled: !!clientId,
    })
}
