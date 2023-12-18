import { FlowBlock } from './FlowBlock';
export class BuilderSettings {
  id: number;
  aiReliability: number;
  automaticTracking: boolean;
  useRouterContext: boolean;
  sessionExpiration: number;
  actionTimeout: number;
  flowIdentifier: number;
  configurationVariables: string;
  flowBlock: FlowBlock;
}
