// eslint-disable-next-line import/no-unresolved
import { LanguageClientOptions, ExtensionContext, services, workspace, LanguageClient } from 'coc.nvim';
import getExecutable from './zlsExecutable';
import { lspName } from './constants';

async function activate(context: ExtensionContext): Promise<void> {
  const config = workspace.getConfiguration('zls');

  if (!config.get<boolean>('enable', true)) {
    return;
  }

  const serverOptions = getExecutable(config);

  const clientOptions: LanguageClientOptions = {
    documentSelector: ['zig'],
    initializationOptions: config,
  };

  const client = new LanguageClient('zls', lspName, serverOptions, clientOptions);
  context.subscriptions.push(services.registLanguageClient(client));

  client.onReady().then(() => {
    if (!config.get<boolean>('startupMessage', false)) {
      return;
    }
    workspace.showMessage("coc-zls Running");
  });
}

export default activate;
