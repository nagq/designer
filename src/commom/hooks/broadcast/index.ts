import * as React from 'react';
import { useEventListener } from 'ahooks';
import { isBroadcastMessage } from './utils';
import { BROADCAST_MESSAGE_SOURCE } from './constants';
import { BroadcastMessage, BROADCAST_MESSAGE_TYPE } from './types';

export const useBroadcast = (
  iframe: React.MutableRefObject<HTMLIFrameElement | null>,
) => {
  const postMessage = (type: BROADCAST_MESSAGE_TYPE, payload: any) => {
    iframe.current?.contentWindow?.postMessage(
      { source: BROADCAST_MESSAGE_SOURCE, type, payload },
      '*',
    );
  };

  const onMessage = (message: BroadcastMessage) => {
  };

  React.useEffect(() => {
  }, []);

  useEventListener('message', (event) => {
    const message = event.data;
    isBroadcastMessage(message) && onMessage(message);
  });
};
