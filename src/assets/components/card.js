import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Modal,
  Grid,
} from "@mui/material";
import * as React from "react";
/** Variables */
/** Load images */
import deceasedImg from "../pics/deceased.png";
/** Variables */
/** */
const Card1 = ({ image }) => {
  /** States */
  /** */
  const [open, setOpen] = React.useState(true);
  /** Variables */
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby=""
        aria-describedby=""
      >
        <Card
          className="modal"
          onClick={(e) => {
            setOpen(false);
          }}
        >
          <CardActionArea>
            <CardMedia component="img" image={image} alt="{props.name}" />
            <CardContent>
              <Typography variant="h3" className="h1">
                First textfield
              </Typography>
              <Typography variant="h3" className="h2">
                Another textfield
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Modal>
    </>
  );
};
/** */
const TitleCard = ({ setFullImage, deceased=false, setImage, image, title }) => {
  /** States */
  /** */
  /** Variables */
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
        <Card className="titleCard" onClick={(e) => {}} >
          <CardActionArea>
            <CardMedia component="img" image={image} alt="{props.name}" onClick={(e) => {setFullImage(true);setImage(image)}}/>
            <CardMedia component="img" image={deceasedImg} alt="{props.name}" className={deceased === false ? "hide" : "show"} onClick={(e) => {setFullImage(true);setImage(image)}} />
            <CardContent>
              <Typography variant="h3" className="h1">
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};
/** */
export { Card1, TitleCard };
