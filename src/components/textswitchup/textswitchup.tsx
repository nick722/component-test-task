import React, {ForwardRefRenderFunction, HTMLAttributes} from 'react'
import styles from './textswitchup.module.css'

import classnames from 'classnames'
export interface TextSwitchProps extends HTMLAttributes<HTMLButtonElement> {
  label1: string
  label2: string,
  key1?: string,
  key2?: string,
  initialState?: boolean
}
// export interface SwitchHandle {
//   value: () => string ;
// };

const TextSwitchDefault: ForwardRefRenderFunction<SwitchHandle, TextSwitchProps> = ({ label1, label2, key1, key2, initialState = false }, ref) => {
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

  // React.useImperativeHandle(
  //   ref,
  //   () => ({
  //     // value: () => myRef.current?.checked ? label2 : label1,
  //     // onChange: (lambda: any) => {
  //     //   if (myRef.current) {
  //     //   return myRef.current.onchange = lambda;
  //     //   }
  //     // },
  //     // key: () => myRef.current?.checked ? key2 : key1
  //   }),
  //   [myRef]
  // )

  return (
    <label className={switchClass}>
      <input className={inputClass} checked={checked} type='checkbox' ref={myRef} />
      <span className={styles.slider} placeholder={label2 || 'Buy'} data-value={label1 || 'Sell'}>
        <div>{label1 || 'Sell'}</div>
        <div>{label2 || 'Buy'}</div>
      </span>
    </label>
  )
}

export const TextSwitchUp = React.forwardRef(TextSwitchDefault)
