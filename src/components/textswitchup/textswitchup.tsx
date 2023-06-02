import React, {useEffect, createContext, ForwardRefRenderFunction, HTMLAttributes} from 'react'
import classnames from 'classnames'

import styles from './textswitchup.module.css'

const  switchClass = classnames(
  styles.switch
)
const inputClass = classnames({
  [styles.input]:true,
  'styles.input:checked': true,
  'styles.input:focus': true
})
const slider = classnames({
  [styles.slider]: true,
  [styles.round]: true
})


export interface TextSwitchProps extends HTMLAttributes<HTMLButtonElement> {
   selectedOption?: number
}
  export const Context = createContext(<T,>(value: T)=>{})

const TextSwitchDefault: ForwardRefRenderFunction<HTMLInputElement, TextSwitchProps> = ({ selectedOption, children, label1, label2, key1, key2, initialState = false }, ref) => {
  const  [selectedElement, setSelectedElement] = React.useState(selectedOption);

  // useEffect(() => {
  // console.log("selectedElement", selectedElement);
  // }, [selectedElement])

  const numberOfOptions = children.length;
  const x = 100 * selectedElement;

  const sliderAnimationStyles = {
    transform: `translate3d(${x}%, 0, 0)`,
    width: `${100 / numberOfOptions}%`,
  }

  const onOptionSelected = <T,>(value: T) => {
    setSelectedElement( children.findIndex(child => child.props.value === value))
    return value
  }

  return (
    <label className={switchClass}>
      <span style={sliderAnimationStyles} className={styles.slider}/>
      <Context.Provider value={onOptionSelected}>
      {children}
      </Context.Provider>
    </label>
  )
}

export const TextSwitchUp = React.forwardRef(TextSwitchDefault)
