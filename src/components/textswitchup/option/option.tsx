import React, {useContext, FC} from 'react';
import styles from "./option.module.css"
import {Context} from "@/components/textswitchup/textswitchup";

interface OptionProps {
  children: React.ReactNode
  value: string,
  // items: string[]
}

export const Option  = ({ value, children}: OptionProps) => {
const onMouseDown = useContext(Context)

  return (
      <div value={value} onMouseDown={() => onMouseDown(value)} className={styles.option}>
        {children}
      </div>
  );
};


