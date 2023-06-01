import React, {
  FC,
  ReactNode,
  useState,
  useEffect,
  createContext,
  useRef
} from "react";

import styles from "./textswitch.module.css";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";

const inlineMargin = 5;
const switchName = "switch";

export const Context = createContext((value: HTMLElement) => {});

interface Option {
  value: string;
  width: number;
  x: number;
}

interface TextSwitchProps {
  children: ReactNode | ReactNode[];
  register: UseFormRegister<FieldValues>;
  setValue: (name: string, value: unknown, config?: Object) => void;
}

const getOptionValues = (node: HTMLElement): Option => ({
  value: node.getAttribute("data-value")!,
  width: node.getBoundingClientRect().width,
  x: node.getBoundingClientRect().x
});

export const TextSwitch: FC<TextSwitchProps> = ({
  setValue,
  register,
  children
}) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [sliderContainerX, setSliderContainerX] = useState<number | null>(null);

  useEffect(() => {
    const parentNode = parentRef.current as HTMLElement;
    const defaultOption = getOptionValues(
      parentNode?.children[2] as HTMLElement
    );
    setSliderContainerX(parentNode?.getBoundingClientRect().x);
    setSelectedOption(defaultOption);
    setValue(switchName, defaultOption.value);
  }, []);

  const getSliderStyles = () => {
    if (selectedOption && sliderContainerX) {
      return {
        width: selectedOption.width - inlineMargin * 2,
        left: selectedOption.x + inlineMargin - sliderContainerX
      };
    }
  };

  const getOptionRef = (optionElement: HTMLElement) => {
    const selectedOption = getOptionValues(optionElement);
    setSelectedOption(selectedOption);
    setValue(switchName, selectedOption.value);
  };

  return (
    <div ref={parentRef} className={styles.switch}>
      <input {...register(switchName)} type="hidden" />
      <span style={getSliderStyles()} className={styles.slider} />
      <Context.Provider value={getOptionRef}>
        <>{children}</>
      </Context.Provider>
    </div>
  );
};
