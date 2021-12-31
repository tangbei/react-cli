const ip = require('ip');
const chalk = require('chalk');

const divLine = chalk.gray('\n*********************************************');

const logger = {
  error: (err) => {
    console.log(chalk.red(err));
  },
  appStarted: (port, host, tunnelStarted) => {
    console.log(`Server started!  ${chalk.green('√')}`);
    if (tunnelStarted) {
      console.log(`Tunnel initialised ${chalk.green('√')}`);
    }

    console.log(`
${chalk.bold('Access URLs:')}
${divLine}

    localhost: ${chalk.magenta(`http://${host}:${port}`)}
    lan: ${chalk.magenta(`http://${ip.address()}:${port}`)
    + (tunnelStarted ? `\n  Proxy: ${chalk.magenta(tunnelStarted)}` : '')}
${divLine}
${chalk.blue(`Press ${chalk.italic('CTRL-C/COMMAND_C')} to stop`)}
`);
  },
  point: (msg) => {
    console.log(chalk.green(msg));
  },
};

module.exports = logger;
