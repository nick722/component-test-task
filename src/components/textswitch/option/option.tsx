import React, { useRef, useContext, FC } from "react";
import classnames from "classnames";
import { Context } from "@/components/textswitch/textswitch";

import styles from "./option.module.css";

const option = classnames({
  [styles.option]: true
});

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
      className={option}
    >
      {children}
    </div>
  );
};
