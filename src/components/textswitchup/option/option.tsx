import React, {FC} from 'react';
import styles from "./option.module.css"

interface OptionProps {
  children: React.ReactNode
  value: string,
  // items: string[]
}


export const Option  = ({ value, children}: OptionProps) => {
  return (
      <div className={styles.option}>
        {children}
      </div>
  );
};


