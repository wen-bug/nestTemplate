export class Cors {
  private app = null;
  constructor(app) {
    this.app = app;
    this.handle();
  }
  handle() {
    this.app.enableCors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    });
  }
}
