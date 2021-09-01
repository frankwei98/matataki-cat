import { useEffect, useMemo } from "react"
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { accessTokenAtom } from "../atoms/AccessToken.atom";
import { useQuery } from "../hooks/useQuery"

export function CallBackHandler() {
    const query = useQuery();
    const history = useHistory()
    const [_, tokenSetter] = useRecoilState(accessTokenAtom)
    const oauthToken = useMemo(() => {
        return query.get('token')
    }, [query]);

    useEffect(() => {
        if (!oauthToken) return;
        tokenSetter(oauthToken);
        history.push('/cat')
    }, [history, tokenSetter, oauthToken])

    if (!oauthToken) {
        return <div className="error">
            Sorry but accessToken not found
        </div>
    }

    return <div className="callback">
        Redirecting...
    </div>
}