import React, {FC} from 'react';
import styles from "./option.module.css"

interface OptionProps {
  children: React.ReactNode
  value: string,
  items: string[]
}


export const Option  = ({items, value, children}: OptionProps) => {
  return (
      <span className={styles.option}>
        {children}
      </span>
  );
};


