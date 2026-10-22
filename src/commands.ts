import {commands} from 'coc.nvim';

export default function registerCommand(
	command: string,
	callback: (...arguments_: any[]) => void,
) {
	commands.registerCommand(`zig.${command}`, callback);
}
