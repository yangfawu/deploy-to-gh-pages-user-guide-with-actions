import { ReactNode } from "react"

type Props = {
    children?: ReactNode
}
export default function Code({ children }: Props) {
    return (
        <code style={{
            display: "inline-block",
            padding: "0 5px",
            color: "#1A2027",
            backgroundColor: "rgba(102, 178, 255, 0.15)",
            borderRadius: "5px",
            fontSize: "0.8125rem",
            direction: "ltr",
        }}>
            {children}
        </code>
    )
}
