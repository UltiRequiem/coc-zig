// eslint-disable-next-line import/no-unresolved
import {
  LanguageClientOptions,
  ServerOptions,
  window,
  ExtensionContext,
  services,
  workspace,
  LanguageClient,
} from 'coc.nvim';
import { LSP_NAME } from './constants';

async function activate(context: ExtensionContext): Promise<void> {
  const config = workspace.getConfiguration('zig');

  const zlsPath = config.get('path', '');

  // To turn off the extension
  if (!config.get<boolean>('enable', true)) {
    return;
  }

  if (!zlsPath) {
    window.showErrorMessage('Failed to find zls executable! Please specify its path in your settings.');
    return;
  }

  const serverOptions: ServerOptions = {
    command: zlsPath,
    args: config.get<boolean>('debugLog', false) ? ['--debug-log'] : [],
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: 'file', language: 'zig' }],
    outputChannel: window.createOutputChannel('Zig Language Server'),
  };

  const client = new LanguageClient('zls', LSP_NAME, serverOptions, clientOptions);
  context.subscriptions.push(services.registLanguageClient(client));

  if (config.get<boolean>('startUpMessage', true)) {
    window.showMessage('${lspName} running!');
  }
}

export default activate;
