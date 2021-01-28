import express, { Application } from 'express';

class server {
  public App: Application;
  private port: number;

  constructor(port: number) {
    this.port = port;
    this.App = express();
    this.middlewareInput();
  }

  private middlewareInput(): void {
    this.App.use(express.json());
  }

  public startServer(): void {
    // this.App.listen(this.port, () => console.log(`PORT[${this.port}] MODE[${MODE}]`));
    this.App.listen(this.port, () => console.log(`Working`));
  }
}

export default server;
