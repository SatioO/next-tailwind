import { editClientById, getClientById, getClientsByRealm } from "@api/client"
import { IClientPayload } from "@api/client/client.types"
import { useRouter } from "next/router"
import { useMutation, useQuery, useQueryClient } from "react-query"

export const useClient = (realmId: string, clientId: string) => {
    return useQuery(["realm", realmId, "client", clientId], () =>
        getClientById(realmId, clientId)
    )
}

export const useClientEdit = () => {
    const router = useRouter()
    const queryClient = useQueryClient()

    return useMutation(
        (data: {
            realmId: string
            clientId: string
            payload: IClientPayload
        }) => editClientById(data),
        {
            onSuccess: async (_data, { realmId }) => {
                await queryClient.refetchQueries(["realm", realmId, "client"])
                router.back()
            },
        }
    )
}

export default function useClientsByRealm(realm: string) {
    return useQuery(
        ["realm", realm, "client"],
        () => getClientsByRealm(realm),
        { enabled: !!realm }
    )
}
