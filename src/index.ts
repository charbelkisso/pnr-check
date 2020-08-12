import * as express from 'express';
import PersonalNumber, { responseMessage } from './PersonalNumber';
const app = express();


app.get('/pnrcheck/:pnr', (req: express.Request, res: express.Response) => {
    let pnr = new PersonalNumber(req.params['pnr']);
    res.json(pnr.checkPersonalNumber());
});


app.listen(8080);