import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function RightBar() {
  return (
    <Box marginTop={3}>
      <Typography>Latest Photos</Typography>
      <ImageList sx={{ width: 250, height: 250 }} cols={2}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "https://img.freepik.com/free-photo/yellow-honeycomb-texture_95678-319.jpg?w=1380&t=st=1679932021~exp=1679932621~hmac=1eb61ecf412a0266eb5fa6b10e85a774e15a331ca7a9efa63c5155202043aa05",
    title: "Home1",
  },
  {
    img: "https://img.freepik.com/free-photo/close-up-honeycomb-texture_23-2149442355.jpg?w=740&t=st=1679932035~exp=1679932635~hmac=18ce10d625e4a5494ddcced4c3098d19064227256696a8d7eb1f2408288ac9e9",
    title: "Home2",
  },
  {
    img: "https://img.freepik.com/free-photo/close-up-honeycomb-with-beeswax-honey_23-2149442357.jpg?w=1380&t=st=1679932046~exp=1679932646~hmac=8061362c56824c15728c4ba5012c812faa33a008d5949ecb72f1a535254c939e",
    title: "Home3",
  },
  {
    img: "https://img.freepik.com/free-photo/close-up-honeycomb-with-honey-beeswax_23-2149442362.jpg?w=740&t=st=1679932057~exp=1679932657~hmac=6ce86529c0ef0813be23ea3372bc38d6896bcee9d0a4599474fa051f2d380d87",
    title: "Home4",
  },
];