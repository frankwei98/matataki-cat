import { useMemo } from "react"
import { useQuery } from "../hooks/useQuery"

export function CallBackHandler() {
    const query = useQuery()
    const oauthToken = useMemo(() => {
        return query.get('token')
    }, [query])

    if (!oauthToken) {
        return <div className="error">
            Sorry but accessToken not found
        </div>
    }

    return <div className="callback">
        {oauthToken}
    </div>
}