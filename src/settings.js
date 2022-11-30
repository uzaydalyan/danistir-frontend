import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react"

const appId = "651567b3ecc3473e806ec776ae53781a";
const token = "007eJxTYJhYtfn40gd39ixe9GNe6sotL/hirSyuvTZcs8Rh0utvNhtfKzCYmRqampknGacmJxubmBunWhiYpSabm5slppoam1sYJs4paEtuCGRk0MydycAIhSA+C0NuYmYeAwMAlC4i9A==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";