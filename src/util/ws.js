import * as SockJS from 'sockjs-client'
import Stomp from 'stomp-websocket'

import { Message } from 'element-ui'

const wsHost = "http://47.119.132.84:6661/notification";
// const wsHost = "http://192.168.1.116:6661/notification";
const wsTopic = "/topic/server";

let ws_socket = {
  connection: connection,
  destroyConnection: destroyConnection
}
let socket
let stompClient

function connection() {
  // const token = '6e6f506b-9ca8-465a-af83-6d7dc3c0cc68'
  // const headers = {
  //   'Authorization': 'Bearer ' + token
  // }
  socket = new SockJS(wsHost)
  stompClient = Stomp.over(socket)
  return stompClient
}

function destroyConnection (){
  if (stompClient != null) {
    stompClient.disconnect();
    socket.onclose;
    socket.close();
    stompClient = {};
    socket = {};
  }
}
export {
  ws_socket
}