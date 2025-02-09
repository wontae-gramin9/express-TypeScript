// Type Declaration
// 기존 타입에 정해진 타입이 없어서 에러가 나올 때 타입을 추가해주는 법
import "express";

// express모듈의 Request interface에 overwriting
declare module "express" {
  interface Request {
    timestamp?: number;
  }
}
