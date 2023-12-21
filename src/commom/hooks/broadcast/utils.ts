import isPlainObject from 'lodash/isPlainObject';
import type { BroadcastMessage } from './types';
import {
  BROADCAST_MESSAGE_SOURCE,
  BROADCAST_MESSAGE_TYPE_KEYS,
} from './constants';

export const isBroadcastMessage = (
  value: unknown,
): value is BroadcastMessage => {
  if (!isPlainObject(value)) return false;
  const { source, type } = value as BroadcastMessage;
  return (
    source === BROADCAST_MESSAGE_SOURCE
    && BROADCAST_MESSAGE_TYPE_KEYS.includes(type)
  );
};
