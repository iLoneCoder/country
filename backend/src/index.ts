import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"
import { Request, Response, NextFunction } from "express"
import countryRoute from "./routes/countryRoute"
import AppError from "./utils/appError"

dotenv.config()
const app = express()
const PORT = 8000

app.use(cors())
app.use(express.json())

app.use("/countries", countryRoute)

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new AppError("Not Found", 404)
  next(err)
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode ? err.statusCode : 500

  console.log(err)

  res.status(statusCode).json({
    status: "error",
    message: err.message,
  })
})

app.listen(8000, () => {
  console.log(`ample app listening on port ${PORT}!`)
})
