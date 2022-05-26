import { NextFunction, Request, Response } from "express"

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("[errorHandler]", err.message)
    
    let err_object: any = JSON.parse(err.message)
    res.status(err_object.status || 500)
    res.json({
        message: err_object.message,
        error: err_object
    })
}