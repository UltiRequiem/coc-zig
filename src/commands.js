import { commands } from 'coc.nvim';

function registerCommand(command, impl) {
  commands.registerCommand(`zls.${command}`, impl);
}

export default registerCommand
