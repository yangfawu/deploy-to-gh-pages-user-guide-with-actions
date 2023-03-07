import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react"

const Context = createContext({
    value: {
        parsed: "",
        raw: ""
    },
    update: (val: string) => { return "" as any }
})

const STORAGE_KEY = "RepositoryProvider::repo"
type Props = {
    children?: ReactNode
}
export default function RepositoryProvider({ children }: Props) {
    const [name, setName] = useState(localStorage.getItem(STORAGE_KEY) ?? "")

    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, name)
    }, [name])

    const parsed = useMemo(() => name || "[YOUR REPOSITORY NAME]", [name])

    const update = useMemo(() => (val: string) => setName(val), [setName])

    return (

        <Context.Provider value={{
            value: {
                parsed,
                raw: name,
            },
            update,
        }}>
            {children}
        </Context.Provider>
    )
}

export const useRepo = () => useContext(Context)
