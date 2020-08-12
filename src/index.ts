import * as express from 'express';
import PersonalNumber, { responseMessage } from './PersonalNumber';
const app = express();
const port = process.env.PORT || 8080;

app.get('/pnrcheck/:pnr', (req: express.Request, res: express.Response) => {
    let pnr = new PersonalNumber(req.params['pnr']);
    res.json(pnr.checkPersonalNumber());
});


app.listen(port, ()=>{console.log("service is running on port: ", port)});