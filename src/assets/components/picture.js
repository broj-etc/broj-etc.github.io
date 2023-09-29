import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Modal,
    Typography,
} from "@mui/material";
import * as React from "react";
import placeholder from "../pics/placeholders/imgPlaceholder.png";
/** Variables */
/** Load images */
/** Variables */
/** */
const FullImage = ({image}) => {
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
          aria-describedby="">
            <Card className="modal" onClick={(e) => {setOpen(false)}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    image={placeholder}
                    alt="{props.name}"
                    />
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
  export { FullImage };
  