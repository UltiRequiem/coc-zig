import { ExtensionContext, services, workspace, LanguageClient } from 'coc.nvim';

async function activate(context: ExtensionContext): Promise<void> {
  const config = workspace.getConfiguration('coc-zls');

  if (!config.get<boolean>('enable', true)) return;

  const serverOptions = {
    command: 'zls',
  };

  const clientOptions = {
    documentSelector: ['zig'],
  };

  const client = new LanguageClient('coc-zls', 'coc-zls', serverOptions, clientOptions);
  context.subscriptions.push(services.registLanguageClient(client));
}

export default activate;
