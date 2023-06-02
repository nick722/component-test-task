import React, {useRef, useContext, FC, useEffect} from 'react';
import styles from "./option.module.css"
import {Context} from "@/components/textswitchup/textswitchup";

interface OptionProps {
  children: React.ReactNode
  value: string,
  // items: string[]
}

export const Option  = ({ value, children}: OptionProps) => {
const onMouseDown = useContext(Context)
  const ref = useRef(null)

  useEffect(()=> {
    console.log("ref.current.offsetWidth", ref.current.offsetWidth);
  })


  return (
      <div ref={ref} value={value} onMouseDown={() => onMouseDown(ref.current)} className={styles.option}>
        {children}
      </div>
  );
};


