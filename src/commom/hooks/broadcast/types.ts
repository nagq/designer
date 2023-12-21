import { BROADCAST_MESSAGE_SOURCE } from './constants';

export enum BROADCAST_MESSAGE_TYPE {
  /** 初始化 */
  INITIALIZE = 'initialize',
  /** 选中组件 */
  SELECTED_COMPONENT = 'selected-component',
  /** 悬停组件 */
  HOVERED_COMPONENT = 'hovered-component',
  /** 渲染预览页面 */
  RERENDER = 'rerender',
}

export interface BroadcastMessage<P = any> {
  source: typeof BROADCAST_MESSAGE_SOURCE;
  type: BROADCAST_MESSAGE_TYPE;
  payload: P;
}
