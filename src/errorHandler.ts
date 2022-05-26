import { NextFunction, Request, Response } from "express"

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    
    res.status(err.status || 500)
    res.json({
        message: err.message,
        error: err
    })
}