import { commands } from 'coc.nvim';

function registerCommand(command: string, impl: (...args: any[]) => void) {
  commands.registerCommand(`zig.${command}`, impl);
}

export default registerCommand;
