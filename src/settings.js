import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react"

const appId = "651567b3ecc3473e806ec776ae53781a";

export const config = { mode: "rtc", codec: "vp8", appId: appId};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
