import cors from 'cors';
import express, {
  json,
  NextFunction,
  Request as ExRequest,
  Response as ExResponse,
  urlencoded,
} from 'express';
import { RegisterRoutes } from '../build/routes';
import * as swaggerUi from 'swagger-ui-express';

import { ValidateError } from 'tsoa';

const app = express();
const port = 5000;

app.use(cors({ origin: 'http://localhost:3000' }));

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

app.use(function errorHandler(
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: 'Validation Failed',
      details: err?.fields,
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }

  next();
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
