import { Command } from 'commander'

import init from './commands/init'

const program = new Command()

program.version('1.0.0').description('A simple cli tool to send batch mail.')

program
  .command('init')
  .alias('i')
  .description('Initializes config file to send email.')
  .action(() => {
    init()
  })

program.parse(process.argv)
