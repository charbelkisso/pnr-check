import * as express from "express";
import { config } from "dotenv";
import PersonalNumber from "./PersonalNumber";

const app = express();
const port = process.env.PORT || 8080;
config();

app.get("/pnrcheck/:pnr", (req: express.Request, res: express.Response) => {
    let pnr = new PersonalNumber(req.params["pnr"]);
    let responseMessage = pnr.checkPersonalNumber();

    if (!responseMessage && responseMessage === null)
        res.status(500).json({
            error: "Internal Error!",
        });
    else res.status(200).json(responseMessage);
});

app.listen(port, () => {
    console.log("service is running on port: ", port);
});
