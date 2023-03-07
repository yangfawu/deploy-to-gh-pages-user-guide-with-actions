import { Box, ImageList, ImageListItem } from "@mui/material"

type Props = {
    src: HTMLImageElement["src"]
    alt: HTMLImageElement["alt"]
}
export default function Image({ src, alt }: Props) {
    return (
        <Box sx={{
            padding: "0px 24px",
            background: `repeating-linear-gradient(
                45deg,
                #fff,
                #fff 10px,
                #eee 10px,
                #eee 20px
            )`,
            borderRadius: "4px"
        }}>
            <ImageList cols={1} sx={{ margin: 0 }}>
                <ImageListItem>
                    <img src={src} alt={alt}/>
                </ImageListItem>
            </ImageList>
        </Box>
    )
}
