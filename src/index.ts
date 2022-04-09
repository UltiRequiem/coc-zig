import {
	commands,
	ExtensionContext,
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	services,
	window,
	workspace,
} from 'coc.nvim';
import {lspName} from './constants';

export async function activate(context: ExtensionContext) {
	const config = workspace.getConfiguration('zig');

	const command = config.get('path', '');

	if (!config.get('enabled', true)) {
		return;
	}

	if (!command) {
		return window.showErrorMessage(
			'Failed to find the zls executable! Please specify its path in your settings.',
		);
	}

	const serverOptions: ServerOptions = {
		command,
		args: config.get('debugLog', false) ? ['--debug-log'] : [],
	};

	const clientOptions: LanguageClientOptions = {
		documentSelector: [{scheme: 'file', language: 'zig'}],
		outputChannel: window.createOutputChannel('Zig Language Server'),
	};

	const client = new LanguageClient(
		'zls',
		lspName,
		serverOptions,
		clientOptions,
	);

	context.subscriptions.push(services.registLanguageClient(client));

	if (config.get('startUpMessage', true)) {
		window.showMessage(`${lspName} running!`);
	}

	commands.registerCommand('start', client.start);

	commands.registerCommand('stop', client.stop);

	commands.registerCommand('restart', async () => {
		await client.stop();
		client.start();
	});
}
