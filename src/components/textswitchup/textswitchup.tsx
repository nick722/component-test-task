import React, {
  FC,
  useEffect,
  createContext,
  ForwardRefRenderFunction,
  HTMLAttributes,
  useRef
} from "react";
import classnames from "classnames";

import styles from "./textswitchup.module.css";

const switchClass = classnames(styles.switch);
const inputClass = classnames({
  [styles.input]: true,
  "styles.input:checked": true,
  "styles.input:focus": true
});
const slider = classnames({
  [styles.slider]: true,
  [styles.round]: true
});

export interface TextSwitchProps extends HTMLAttributes<HTMLButtonElement> {
  selectedOption?: number;
}
export const Context = createContext(<T,>(value: T) => {});

export const TextSwitchUp: FC<HTMLInputElement, TextSwitchProps> = ({
  selectedOption,
  children,
  label1,
  label2,
  key1,
  key2,
  initialState = false
}) => {
  console.log("children", children);
  // const ref = useRef(null);
  // console.log("ref.current.children[0]", ref.current.children);
  // const firstElement = {
  //   // value: children[0].getAttribute("value"),
  //   width: children[0].getBoundingClientRect().width,
  //   left: children[0]
  //     .getBoundingClientRect()
  //     .children[0].getBoundingClientRect().width
  // };
  // console.log("firstElement", firstElement);
  const [selectedElement, setSelectedElement] = React.useState("firstElement");

  useEffect(() => {
    console.log("selectedElement", selectedElement);
  }, [selectedElement]);

  // const numberOfOptions = children.length;
  // const x = 100 * selectedElement;

  const sliderAnimationStyles = {
    // transform: `translate3d(${x}%, 0, 0)`,
    width: selectedElement?.width,
    left: selectedElement?.left
    // width: `${100 / numberOfOptions}%`,
  };

  const onOptionSelected = <T,>(option: T) => {
    // console.log("option", option);
    console.log('option.getAttribute("value")', option.getAttribute("value"));
    // console.log(option.offsetWidth)
    console.log(
      "option.getBoundingClientRect() ",
      option.getBoundingClientRect()
    );
    // console.log(children.find(child => child.props.value === option.getAttribute("value")));
    // setSelectedElement( children.find(child => {
    //   // console.log("option.getAttribute(\"value\")", option.getAttribute("value"));
    //   // console.log("child.props.value", child.props.value);
    //   return child.props.value === option.getAttribute("value");
    // }))
    const selectedOption = {
      value: option.getAttribute("value"),
      width: option.getBoundingClientRect().width,
      x: option.getBoundingClientRect().x,
      left: option.getBoundingClientRect().left
    };

    console.log("selectedOption", selectedOption);
    setSelectedElement(selectedOption);
    return option;
  };

  const childrenWithProps = React.Children.map(children, (child, i) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { id: `option${i + 1}` });
    }
  });

  return (
    <label className={switchClass}>
      <span style={sliderAnimationStyles} className={styles.slider} />
      <Context.Provider value={onOptionSelected}>
        {childrenWithProps}
      </Context.Provider>
    </label>
  );
};

// export const TextSwitchUp = React.forwardRef(TextSwitchDefault);
