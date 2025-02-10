import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
  throw new Error("Application error");
  // [Error] 기본적인 error메시지는 html파일을 보낸다
  // response body를 보내고 싶다면 middleware를 설정해주고,
  // 모든 router 밑에 달아준다
});
