import type { IDesignerComponents } from '@/commom/types';
import schema from './schema';

const config: IDesignerComponents = {
  componentName: 'button',
  title: '按钮',
  schema,
  categories: [],
  slots: [
    {
      name: 'content',
      title: '内容',
    },
  ]
};

export default config;
