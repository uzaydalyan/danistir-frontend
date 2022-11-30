import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react"

const appId = "651567b3ecc3473e806ec776ae53781a";
const token = "007eJxTYJib2HdQh/3uDKbPP47riuYutw5WfvyS6+3Wq563S1XuaEcoMJiZGpqamScZpyYnG5uYG6daGJilJpubmyWmmhqbWxgmTrzWntwQyMiQGHeCmZEBAkF8FobcxMw8BgYAbXUf8w==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";