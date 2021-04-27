import { Request, Response } from "express";
import { getCustomRepository, Not, IsNull } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";



class NpsController {
    
    

    async excute(request: Request, response: Response){
        const { survey_id } = request.params;

        const surveysUserRepository = getCustomRepository(SurveysUsersRepository);

        const surveysUsers = await surveysUserRepository.find({
            survey_id,
            value: Not(IsNull()),
        });

        const detractor = surveysUsers.filter(
            (survey) => survey.value >= 0 && survey.value <= 6 
            ).length;

        const passive = surveysUsers.filter(
                (survey) => survey.value >= 7 && survey.value <=8
            ).length;

        const promoters = surveysUsers.filter( 
                (survey) => survey.value >= 9 && survey.value <=10
        ).length;

        const totalAnswers = surveysUsers.length;

        const calculate = Number(
            (((promoters - detractor) / totalAnswers) * 100).toFixed(2)
        );

        return response.json({
            detractor,
            passive,
            promoters,
            totalAnswers,
            nps: calculate,
        });

    }
}

export { NpsController };