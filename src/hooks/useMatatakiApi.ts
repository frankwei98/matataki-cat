import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { MatatakiApi } from "../apis/matataki.api";
import { accessTokenAtom } from "../atoms/AccessToken.atom";

export function useMatatakiApi() {
  const accessToken = useRecoilValue(accessTokenAtom);
  const isMatatakiLogined = useMemo(() => Boolean(accessToken), [accessToken]);
  const matatakiApi = useMemo(() => {
    return new MatatakiApi(accessToken);
  }, [accessToken]);
  return { matatakiApi, isMatatakiLogined };
}
