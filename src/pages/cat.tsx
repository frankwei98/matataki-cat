import { useCallback, useEffect, useMemo, useState } from "react"
import { useRecoilState } from "recoil";
import { accessTokenAtom } from "../atoms/AccessToken.atom";
import { useMatatakiApi } from "../hooks/useMatatakiApi";
import { useQuery } from "../hooks/useQuery"

export function CatPage() {
    const [ipfsHash, setHash] = useState('')

    const [catResult, setCatRes] = useState<string | null>(null);

    const { matatakiApi } = useMatatakiApi()

    const getContent = useCallback(async () => {
        const { data } = await matatakiApi.catByHash(ipfsHash);
        setCatRes(data.data)
    }, [matatakiApi, ipfsHash])

    useEffect(() => {
        if (!ipfsHash) return
        getContent()
    }, [ getContent, ipfsHash ])

    return <div className="cat-page">
        <input type="text" name="ipfsHash" onChange={e => setHash(e.target.value)} placeholder="Enter the IPFS hash" />
        {catResult && <pre>{JSON.stringify(catResult, null, 2)}</pre>}
    </div>
}