import React, { useRef, useContext, FC, useEffect } from "react";
import styles from "./option.module.css";
import { Context } from "@/components/textswitch/textswitch";

interface OptionProps {
  children: React.ReactNode;
  value: string;
}

export const Option: FC<OptionProps> = ({ value, children }) => {
  const getOptionRef = useContext(Context);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      data-value={value}
      onMouseDown={() => getOptionRef(ref.current as HTMLDivElement)}
      className={styles.option}
    >
      {children}
    </div>
  );
};
