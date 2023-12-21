import { ISchema } from '@formily/json-schema'

export interface IDesignerLayoutProps {
  prefixCls?: string
}

export interface IDesignerLayoutContext {
  prefixCls: string
}

export interface IDesignerSlot {
  /** 插槽属性名 */
  name: string;
  /** 插槽显示名称 */
  title?: string;
}

export interface IDesignerComponents {
  /** 组件名 */
  componentName?: string;
  /** 组件显示名称 */
  title?: string;
  /** 组件分类信息 */
  categories?: string[];
  /** 组件配置信息 */
  schema?: ISchema;
  /** 组件节点信息 */
  slots?: IDesignerSlot[];
}
