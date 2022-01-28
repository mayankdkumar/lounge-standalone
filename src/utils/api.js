import axios from "axios";

// const serverApi = "http://localhost:5002/api";
// const serverApi = "https://webrtc-torum.herokuapp.com/api";
const serverApi = "https://websocket.api.torum.team/api";

export const getRoomExists = async (roomId) => {
  const response = await axios.get(`${serverApi}/room-exists/${roomId}`);
  return response.data;
};

export const getTURNCredentials = async () => {
  const response = await axios.get(`${serverApi}/get-turn-credentials`);
  return response.data;
};
