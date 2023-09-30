import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Modal,
    Typography,
} from "@mui/material";
import * as React from "react";
/** Variables */
/** Load images */
/** Variables */
/** */
const FullImage = ({image, fullImage, setFullImage}) => {
    /** States */
    /** */
    /** Variables */
    return (
      <>
        <Modal
          open={fullImage}
          onClose={() => setFullImage(false)}
          aria-labelledby=""
          aria-describedby="">
          <>
            <Typography className="modalCount">1 / 1</Typography>
            <Typography className="modalLeft">←</Typography>
              <Card className="modal" onClick={(e) => {setFullImage(false)}}>
                  <CardActionArea>
                      <CardMedia
                      component="img"
                      image={image}
                      alt="{props.name}"
                      />
                      <CardContent>
                      </CardContent>
                  </CardActionArea>
              </Card>
            <Typography className="modalClose" onClick={(e) => {setFullImage(false)}}>X</Typography>
            <Typography className="modalRight">→</Typography>
          </>
        </Modal>
      </>
    );
  };
  /** */
  export { FullImage };
  