import { getRealms } from "@api/realm"
import { useQuery } from "react-query"

export function useRealm() {
    return useQuery(["realm"], getRealms)
}
