import { getRealms } from "@api/realm"
import { useQuery } from "react-query"

export default function useRealm() {
    return useQuery(["realms"], getRealms)
}
