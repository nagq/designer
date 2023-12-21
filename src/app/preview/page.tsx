'use client';

import React from 'react';
import components from './components';

export default function Page() {
  React.useEffect(() => {
    window.addEventListener('message', console.info, false);
  }, []);

  return (
    <div>
      Preview
    </div>
  );
}
