import { Box, ImageList, ImageListItem } from "@mui/material"

type Props = {
    src: HTMLImageElement["src"]
    alt: HTMLImageElement["alt"]
}
export default function Image({ src, alt }: Props) {
    return (
        <Box sx={{ padding: "0px 24px", backgroundColor: "white", borderRadius: "4px" }}>
            <ImageList cols={1} sx={{ margin: 0 }}>
                <ImageListItem>
                    <img src={src} alt={alt}/>
                </ImageListItem>
            </ImageList>
        </Box>
    )
}
