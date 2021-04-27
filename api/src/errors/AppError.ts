


export class AppError {
    public readonly  Message: string;
    public readonly StatusCode: number;
    

    constructor(Message: string, StatusCode = 400) {
        this.Message = Message;
        this.StatusCode = StatusCode;

    }
}