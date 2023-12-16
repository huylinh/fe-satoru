import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function StandardImageList({ itemData }) {
  const [imageUrl, setImageUrl] = React.useState();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (e) => {
    setImageUrl(e.target.getAttribute("src"));
    setOpen(true);
  };

  return (
    <ImageList
      sx={{ width: 750, height: 600, bgcolor: "#fff", p: 4 }}
      cols={3}
      rowHeight={250}
      gap={8}
    >
      {itemData.map((item, index) => (
        <ImageListItem key={index}>
          <img
            className="rounded-lg hover:cursor-pointer shadow-md"
            // srcSet={`${item.image_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.image_url}?w=164&h=164&fit=crop&auto=format`}
            alt={index}
            loading="lazy"
            onClick={handleOpen}
          />
        </ImageListItem>
      ))}
      {/* zoom zoom zoom */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 5 }}
        open={open}
        onClick={handleClose}
      >
        <img
          className="w-[600px] h-[600px] rounded-lg"
          // srcSet={`${item.image_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          src={imageUrl}
          alt="image zom zom"
        />
      </Backdrop>
    </ImageList>
  );
}
