import {  Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";

class SurveysController {
    async create(request: Request, response: Response) {
        const { title, description } = request.body;

        const surveysrepository = getCustomRepository(SurveysRepository);


        const survey = surveysrepository.create({
            title,
            description
        });

        await surveysrepository.save(survey);

        
        return response.status(201).json(survey);
    }

    async show(request: Request, response: Response) {
      const surveysrepository = getCustomRepository(SurveysRepository);

      const all = await surveysrepository.find();

      return response.json(all);
    }
}

export { SurveysController };