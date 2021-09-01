import axios from "axios";
import { useCallback, useEffect, useState } from "react"
import { useMatatakiApi } from "../hooks/useMatatakiApi";

export function CatPage() {
    const [ipfsHash, setHash] = useState('')

    const [catResult, setCatRes] = useState<string | null>(null);

    const { matatakiApi } = useMatatakiApi()

    const getContent = useCallback(async () => {
        try {
            const { data } = await matatakiApi.catByHash(ipfsHash);
            setCatRes(data.data)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(error.response?.data.message)
            } else {
                alert(error)
            }
        }
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