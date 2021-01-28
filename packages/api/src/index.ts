import Server from './App';

function main(): void {
  const server = new Server(3000);
  server.startServer();
}

main();
