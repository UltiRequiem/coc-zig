// eslint-disable-next-line import/no-unresolved
import { LanguageClientOptions, window, ExtensionContext, services, workspace, LanguageClient } from 'coc.nvim';
import getExecutable from './zlsExecutable';
import { LSP_NAME } from './constants';

async function activate(context: ExtensionContext): Promise<void> {
  const config = workspace.getConfiguration('zig');

  if (!config.get<boolean>('enable', true)) {
    return;
  }

  const serverOptions = getExecutable(config);

  const clientOptions: LanguageClientOptions = {
    documentSelector: ['zig'],
    initializationOptions: config,
  };

  const client = new LanguageClient('zls', LSP_NAME, serverOptions, clientOptions);
  context.subscriptions.push(services.registLanguageClient(client));

  if (config.get<boolean>('startUpMessage', true)) {
    window.showMessage('${lspName} running!');
  }
}

export default activate;
