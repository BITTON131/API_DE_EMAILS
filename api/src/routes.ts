import { Router } from "express";
import { NpsController } from "./controllers/NpsController";
import { SendMailContrller } from "./controllers/SendMailController";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";
import { AnswerController } from "./controllers/ZAnswerController";

const router = Router();

const usersController = new UserController();
const surveyscontroller = new SurveysController();

const sendMailController = new SendMailContrller();

const answerControler = new AnswerController();

const npsController = new NpsController();

router.post("/users", usersController.create);

router.post("/Survey", surveyscontroller.create);
router.get("/Survey", surveyscontroller.show);

router.post("/sendMail", sendMailController.execute);

router.get("/answers/:value", answerControler.execute);

router.get("/nps/:survey_id", npsController.excute);

export { router } ;