import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";



class AnswerController {

    async execute(request: Request, response: Response) {
        const { value } = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        // Buscando dentro do repositorio, se existe o "u"
        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        });


        //Apos o processo de busca o "U" nao for encrotrada paracerá na tela do Usuário: "Usuário não existe"; 
        if(!surveyUser) {
            throw new AppError("Usuário não existe!");
            
        }

        surveyUser.value = Number(value);
        // Se existe será escrito aqui o "ID: U"
        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser);
    }
}


export { AnswerController }