import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react"

const appId = "651567b3ecc3473e806ec776ae53781a";
const token = "007eJxTYLDtdSxa/cy2g/P6Tp/6gINRe36XX/7MKbEzZu/lPoMAtaUKDGamhqZm5knGqcnJxibmxqkWBmapyebmZomppsbmFoaJ9yd0JzcEMjJsM9zFyMgAgSA+C0NuYmYeAwMAepQgMw==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";