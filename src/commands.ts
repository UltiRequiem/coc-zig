import {commands} from 'coc.nvim';

export default function registerCommand(
	command: string,
	impl: (...args: any[]) => void,
) {
	commands.registerCommand(`zig.${command}`, impl);
}
