'use client';

import { uid } from '@designer/shared';
import { add } from '@designer/core';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  useEffect(() => {
    console.info(add(1, 2));
  }, []);
  return <main className={styles.main}></main>;
}
