import React from 'react';
import styles from './input.module.css';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function TextInput({ label, ...props }:TextInputProps) {
  return (
    <div className={styles.input_component}>
      <label htmlFor="input" className={styles.input_label}>
        {label}
      </label>
      <input
        type="text"
        id="input"
        className={styles.input}
        {...props}
      />
    </div>
  );
}

export default TextInput;
