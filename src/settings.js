import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react"

const appId = "651567b3ecc3473e806ec776ae53781a";
const token = "007eJxTYIh74OfMKu51Xjpn9g1F9RM+yd1LlOuF1pSVlDpePaQe8VmBwczU0NTMPMk4NTnZ2MTcONXCwCw12dzcLDHV1NjcwjDR9WNPckMgIwNfRzYTIwMEgvgsDLmJmXkMDACbzh0c";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";