import React from 'react';
import TextInput from '@/components/TextInput/TextInput';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <TextInput
        label="Enter the Name for the Landing Page"
      />
    </main>
  );
}
