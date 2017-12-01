import { Command } from 'commander'

const program = new Command()

program.version('1.0.0').description('A simple cli tool to send batch mail.')

program.parse(process.argv)
