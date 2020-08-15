import * as express from 'express';
import PersonalNumber, { responseMessage, personalNumberStatus } from './PersonalNumber';
const app = express();
const port = process.env.PORT || 8080;

app.get('/pnrcheck/:pnr', (req: express.Request, res: express.Response) => {
    let pnr = new PersonalNumber(req.params['pnr']);
    let responseMessage = pnr.checkPersonalNumber();

    if (responseMessage.status === personalNumberStatus.Valid)
        res.status(200).json(responseMessage);
    else
        res.status(500).json(responseMessage)
});


app.listen(port, () => { console.log("service is running on port: ", port) });