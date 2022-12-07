import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react"

const appId = "651567b3ecc3473e806ec776ae53781a";
const token = "006651567b3ecc3473e806ec776ae53781aIADTCUk+rfPh/9LqIvv8AOtNVVD2tIe9PGFmZXDQMjLhO3Qs7/YAAAAAIgAV8hwADk2SYwQAAQCOTLZlAgCOTLZlAwCOTLZlBACOTLZl";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "danistirchannel";