import { editClientById } from "@api/client"
import { IClientPayload } from "@api/client/client.types"
import { useRouter } from "next/router"
import { useMutation, useQueryClient } from "react-query"

export type EditClientMutation = {
    realmId: string
    clientId: string
    payload: IClientPayload
}

const useClientEdit = () => {
    const router = useRouter()
    const queryClient = useQueryClient()

    return useMutation((data: EditClientMutation) => editClientById(data), {
        onSuccess: async (_data, { realmId }) => {
            await queryClient.refetchQueries(["realm", realmId, "client"])
            router.back()
        },
    })
}

export default useClientEdit
