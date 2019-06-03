import App from './app';
import SampleRoute from './routes/sample.route';

const app = new App(
    [
        new SampleRoute(),
    ],
    5000,
);

app.listen();