import { getClients } from "@api/client"
import { useQuery } from "react-query"

export default function useClient() {
    return useQuery(["clients"], getClients)
}
