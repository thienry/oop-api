import { Request, Response, NextFunction } from 'express'

export default (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve((error: Error)=> {
    console.log('async ', error)

    res.status(400).json({ message: (error || {}).message, data: error })
  })
}
