import cors from 'cors'
import express, { json, urlencoded } from "express";
import Note from "types/src/Note"
import { RegisterRoutes } from "../build/routes";
import * as swaggerUi from 'swagger-ui-express';

const app = express()
const port = 5000

app.use(cors({ origin: 'http://localhost:3000' }))

app.use(
  urlencoded({
      extended: true,
  })
);

app.use(express.static('public'));
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json',
    },
  })
);

app.use(json());

RegisterRoutes(app);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`))