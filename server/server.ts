import App from './app';

App.app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando na porta ${ process.env.PORT || 3000 }`);
});

process.once('SIGUSR2', () => App.closeDataBaseConnection('nodemon restart', () => process.kill(process.pid, 'SIGUSR2')) );
process.on('SIGINT', () => App.closeDataBaseConnection('conexão interropida', () => process.exit(0)) );
