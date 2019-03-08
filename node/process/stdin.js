const chalk = require('/usr/local/lib/node_modules/chalk');
process.stdin.setEncoding('utf8');


process.stdout.write('是否进行升级(y/n)?');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk == 'y\n') {
    process.stdout.write(chalk.green('升级完成'));
		process.stdout.write();
		process.exit(1);
  }
});
