import CodeMirror, { ReactCodeMirrorProps } from "@uiw/react-codemirror"
import { Box, Button, Stack } from "@mui/material"
import { CopyAll } from "@mui/icons-material"
import copy from "clipboard-copy"
import { useMemo } from "react"
import SidePad from "./SidePad"

type Props = {
    value: string
    extensions?: ReactCodeMirrorProps["extensions"]
    disableCopy?: boolean
}
export default function CodeBlock({ value, extensions = [], disableCopy = false }: Props) {
    const $value = useMemo(() => value.trim(), [value])
    return (
        <SidePad>
            <Stack spacing="4px" marginBottom="20px !important">
                <CodeMirror
                    value={$value}
                    editable={false}
                    theme="dark"
                    extensions={extensions}
                />
                {
                    !disableCopy &&
                    <Box display="flex" justifyContent="right">
                        <Button
                            variant="outlined"
                            startIcon={<CopyAll/>}
                            size="small"
                            onClick={() => copy($value)}
                        >Copy</Button>
                    </Box>
                }
            </Stack>
        </SidePad>
    )
}
