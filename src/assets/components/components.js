import {
  Modal,
  Grid,
  Typography,
  TableContainer,
  TextField,
  Table,
  TableRow,
  TableCell,
  TableBody,
  InputAdornment,
} from "@mui/material";
import * as React from "react";
/** Variables */
/** Load images */
/** Variables */
/** */
const AddCharacter = ({ image, addCharacter, setAddCharacter }) => {
  /** States */
  /** */
  /** Variables */
  return (
    <>
      <Modal
        open={addCharacter}
        onClose={() => setAddCharacter(false)}
        aria-labelledby=""
        aria-describedby=""
      >
        <Grid container spacing={0}>
          <Grid item md={1}></Grid>
          <Grid
            container
            item
            spacing={0}
            xs={12}
            md={10}
            className="modalForm"
            sx={{ marginTop: "50px" }}
          >
            <Grid item xs={1}></Grid>
            <Grid container item xs={10}>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={5}>
                        <Typography variant="h3" className="h1">
                          Add Character
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center" colSpan={5}>
                        <TextField
                          id="character-name"
                          variant="filled"
                          label="Name"
                          required
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">
                        <TextField
                          id="character-strength"
                          variant="filled"
                          label="Strength"
                          type="number"
                          required
                          fullWidth
                        />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          id="character-dexterity"
                          variant="filled"
                          label="Dexterity"
                          type="number"
                          required
                          fullWidth
                        />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          id="character-constitution"
                          variant="filled"
                          label="Constitution"
                          type="number"
                          required
                          fullWidth
                        />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          id="character-wisdom"
                          variant="filled"
                          label="Intelligence"
                          type="number"
                          required
                          fullWidth
                        />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          id="character-charisma"
                          variant="filled"
                          label="Charisma"
                          type="number"
                          required
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">
                        <TextField
                          id="character-strength-bonus"
                          InputProps={{
                            startAdornment: <InputAdornment position="start">+</InputAdornment>,
                          }}
                          variant="filled"
                          type="number"
                          required
                          fullWidth
                        />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          id="character-dexterity-bonus"
                          InputProps={{
                            startAdornment: <InputAdornment position="start">+</InputAdornment>,
                          }}
                          variant="filled"
                          type="number"
                          required
                          fullWidth
                        />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          id="character-constitution-bonus"
                          InputProps={{
                            startAdornment: <InputAdornment position="start">+</InputAdornment>,
                          }}
                          variant="filled"
                          type="number"
                          required
                          fullWidth
                        />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          id="character-wisdom-bonus"
                          InputProps={{
                            startAdornment: <InputAdornment position="start">+</InputAdornment>,
                          }}
                          variant="filled"
                          type="number"
                          required
                          fullWidth
                        />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          id="character-charisma-bonus"
                          InputProps={{
                            startAdornment: <InputAdornment position="start">+</InputAdornment>,
                          }}
                          variant="filled"
                          type="number"
                          required
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
      </Modal>
    </>
  );
};
/** */
export { AddCharacter };
