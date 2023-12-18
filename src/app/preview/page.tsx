'use client';

import React from 'react';

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
