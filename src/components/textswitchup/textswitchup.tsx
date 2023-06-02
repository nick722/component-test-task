import React, {ForwardRefRenderFunction, HTMLAttributes} from 'react'
import styles from './textswitchup.module.css'

import classnames from 'classnames'
export interface TextSwitchProps extends HTMLAttributes<HTMLButtonElement> {
   initialState?: number
}

const TextSwitchDefault: ForwardRefRenderFunction<HTMLInputElement, TextSwitchProps> = ({ children, label1, label2, key1, key2, initialState = false }, ref) => {
  const  [selectedElement, setSelectedElement] = React.useState(initialState);
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


  return (
    <label className={switchClass}>
      <span className={styles.slider}/>
      {children}
    </label>
  )
}

export const TextSwitchUp = React.forwardRef(TextSwitchDefault)
