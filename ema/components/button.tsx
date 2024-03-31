import { ReactNode } from "react"

type Color = "red"|"blu"

type ButtonProps = {
    style :React.CSSProperties,
    onClick? : (action:string) => number,
    children : ReactNode
}

export default function Button({ style,children }:ButtonProps) {
    return (
      <button style={style} >
        {children}
      </button>
    )
  }