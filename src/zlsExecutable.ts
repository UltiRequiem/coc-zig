import { WorkspaceConfiguration } from 'coc.nvim';

function getExecutable(config: WorkspaceConfiguration) {
  return { command: 'zls' };
}

export default getExecutable;
