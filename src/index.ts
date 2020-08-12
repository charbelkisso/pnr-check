import * as express from 'express';
import  PersonalNumber  from './PersonalNumber';
const app = express();

app.get('/pnrcheck/:pnr', (req: express.Request, res: express.Response) => {
    let pnr = new PersonalNumber(req.params['pnr']);
    res.send(pnr.personalNumber);
});


app.listen(8080);