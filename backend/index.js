import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import { User } from "./models/user.model.js";
import { Coffee } from "./models/starbucks.model.js";
import { Token } from "./models/token.model.js";
import { generatePersonal, createPreferSiteData } from "./personal.js";
import {
  checkValidationPhone,
  createToken,
  saveToken,
  sendTokenToPhone,
  checkTokenByPhone,
  checkAuthByPhone,
} from "./phone.js";
import { checkValidationEmail, sendEmail } from "./email.js";

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/users", async (req, res) => {
  const result = await User.find();

  res.send(result);
});

app.get("/starbucks", async (req, res) => {
  const result = await Coffee.find();

  res.send(result);
});

app.post("/user", async (req, res) => {
  let myPersonal = "";
  let isValid = true;

  const name = req.body.name;
  const email = req.body.email;
  const personal = req.body.personal;
  const prefer = req.body.prefer;
  const pwd = req.body.pwd;
  const phone = req.body.phone;
  let og = {};

  //인증 여부 확인
  isValid = await checkAuthByPhone({ phone });
  if (isValid === false) {
    res.status(422).send("에러!! 핸드폰 번호가 인증되지 않았습니다");
    return;
  }

  //주민등록번호 확인 및 뒷자리 가리기
  myPersonal = generatePersonal({ personal });
  if (myPersonal === false) {
    return;
  }

  //핸드폰번호 확인
  isValid = checkValidationPhone({ phone });
  if (isValid === false) {
    return;
  }

  //이메일 확인
  isValid = checkValidationEmail({ email });
  if (isValid === false) {
    return;
  }

  //prefer site 생성
  og = await createPreferSiteData({ prefer });

  //DB-users에 저장
  const user = new User({
    name,
    email,
    personal: myPersonal,
    prefer,
    pwd,
    phone,
    og,
  });
  await user.save();

  //회원 가입 환영 메일
  await sendEmail({ name, email, phone, prefer });

  //클라이언트에 id 반환
  res.send(user.get("_id"));
});

app.post("/tokens/request-token", async (req, res) => {
  let myToken = "";
  let result = "";
  let isValid = true;
  const phone = req.body.phone;

  //전화번호 유효성 확인
  isValid = checkValidationPhone({ phone });
  if (isValid === false) {
    return;
  }

  //토큰 생성
  myToken = createToken();
  if (myToken === false) {
    return;
  }

  //토큰 전송
  await sendTokenToPhone({ phone, myToken });

  //DB-tokens에 저장
  await saveToken({ phone, myToken });

  res.send("핸드폰으로 인증 문자가 전송되었습니다!");
});

app.patch("/tokens/validate-token", async (req, res) => {
  const phone = req.body.phone;
  const token = req.body.token;

  //토큰 일치 확인 및 반영
  const isValid = await checkTokenByPhone({ phone, token });

  res.send(isValid);
});

mongoose.connect("mongodb://my-database:27017/myData");

app.listen(3000);
