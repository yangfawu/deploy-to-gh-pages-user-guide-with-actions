import { Box, ImageList, ImageListItem } from "@mui/material"
import SidePad from "./SidePad"

type Props = {
    src: HTMLImageElement["src"]
    alt: HTMLImageElement["alt"]
}
export default function Image({ src, alt }: Props) {
    return (
        <SidePad disableOnSx>
            <Box sx={{
                // padding: {
                //     xs: 0,
                //     sm: "0px 24px",
                // },
                background: `repeating-linear-gradient(
                45deg,
                #fff,
                #fff 10px,
                #eee 10px,
                #eee 20px
            )`,
                borderRadius: "4px",
            }}>
                <ImageList cols={1} sx={{ margin: "0 auto", maxWidth: "652px" }}>
                    <ImageListItem>
                        <img src={src} alt={alt}/>
                    </ImageListItem>
                </ImageList>
            </Box>
        </SidePad>
    )
}
