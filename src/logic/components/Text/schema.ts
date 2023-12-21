import { ISchema } from '@formily/json-schema';

const schema: ISchema = {
  type: 'object',
  properties: {
    children: {
      type: 'string',
      title: '文本',
    }
  }
}

export default schema;
