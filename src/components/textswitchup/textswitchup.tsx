import React, {ForwardRefRenderFunction, HTMLAttributes} from 'react'
import styles from './textswitchup.module.css'

import classnames from 'classnames'
export interface TextSwitchProps extends HTMLAttributes<HTMLButtonElement> {
   initialState?: boolean
}

const TextSwitchDefault: ForwardRefRenderFunction<HTMLInputElement, TextSwitchProps> = ({ children, label1, label2, key1, key2, initialState = false }, ref) => {
  let [checked, setChecked] = React.useState(initialState);
  let switchClass = classnames(
    styles.switch
  )
  let inputClass = classnames({
    [styles.input]:true,
    'styles.input:checked': true,
    'styles.input:focus': true
  })
  let slider = classnames({
    [styles.slider]: true,
    [styles.round]: true
  })

  let myRef = React.useRef<HTMLInputElement | null>(null)

  React.useEffect(() => {
    if (myRef.current) {
      myRef.current.onclick = (e) => {
        const target = e.target as HTMLInputElement
        setChecked(target.checked)
      }
    }

  }, [myRef])

  return (
    <label className={switchClass}>
      <span className={styles.slider}/>
      {children}
    </label>
  )
}

export const TextSwitchUp = React.forwardRef(TextSwitchDefault)
