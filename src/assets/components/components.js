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
  Switch,
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
                      <TableCell colSpan={6}>
                        <Typography variant="h1" className="h2">
                          Add Character
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={6}>
                        <Typography variant="h3" className="h1">
                          Basic Information
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center" colSpan={3}>
                        <TextField
                          id="character-name"
                          variant="filled"
                          label="Name"
                          required
                          fullWidth
                        />
                      </TableCell>
                      <TableCell align="center" colSpan={1}>
                        <TextField
                          id="character-proficiency"
                          variant="filled"
                          label="Proficiency"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                +
                              </InputAdornment>
                            ),
                          }}
                          required
                          fullWidth
                        />
                      </TableCell>
                      <TableCell align="center" colSpan={1}>
                        <TextField
                          id="character-walking-speed"
                          variant="filled"
                          label="Walking Speed"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                ft.
                              </InputAdornment>
                            ),
                          }}
                          required
                          fullWidth
                        />
                      </TableCell>
                      <TableCell align="center" colSpan={1}>
                        <TextField
                          id="character-initiative"
                          variant="filled"
                          label="Initiative"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                +
                              </InputAdornment>
                            ),
                          }}
                          type="number"
                          required
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center" colSpan={1}>
                        <TextField
                          id="character-Gender"
                          variant="filled"
                          label="Gender"
                          required
                          fullWidth
                        />
                      </TableCell>
                      <TableCell align="center" colSpan={1}>
                        <TextField
                          id="character-Race"
                          variant="filled"
                          label="Race"
                          required
                          fullWidth
                        />
                      </TableCell>
                      <TableCell align="center" colSpan={1}>
                        <TextField
                          id="character-Class"
                          variant="filled"
                          label="Class"
                          required
                          fullWidth
                        />
                      </TableCell>
                      <TableCell align="center" colSpan={1}>
                        <TextField
                          id="character-level"
                          variant="filled"
                          type="number"
                          label="Level"
                          required
                          fullWidth
                        />
                      </TableCell>
                      <TableCell align="center" colSpan={1}>
                        <TextField
                          id="character-another-class"
                          variant="filled"
                          label="Another Class"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell align="center" colSpan={1}>
                        <TextField
                          id="character-another-level"
                          variant="filled"
                          type="number"
                          label="Level"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={6}>
                        <Typography variant="h3" className="h1">
                          Senses
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={6}>
                        <Typography variant="h3" className="h1">
                          Proficiencies & Languages
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={6}>
                        <Typography variant="h3" className="h1">
                          Abilities
                        </Typography>
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
                          label="Wisdom"
                          type="number"
                          required
                          fullWidth
                        />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          id="character-intelligence"
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
                            startAdornment: (
                              <InputAdornment position="start">
                                +
                              </InputAdornment>
                            ),
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
                            startAdornment: (
                              <InputAdornment position="start">
                                +
                              </InputAdornment>
                            ),
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
                            startAdornment: (
                              <InputAdornment position="start">
                                +
                              </InputAdornment>
                            ),
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
                            startAdornment: (
                              <InputAdornment position="start">
                                +
                              </InputAdornment>
                            ),
                          }}
                          variant="filled"
                          type="number"
                          required
                          fullWidth
                        />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          id="character-intelligence-bonus"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                +
                              </InputAdornment>
                            ),
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
                            startAdornment: (
                              <InputAdornment position="start">
                                +
                              </InputAdornment>
                            ),
                          }}
                          variant="filled"
                          type="number"
                          required
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={6}>
                        <Typography variant="h3" className="h1">
                          Saving Throws
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">
                        <TextField
                          id="character-strength-saving"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                +
                              </InputAdornment>
                            ),
                          }}
                          variant="filled"
                          type="number"
                          label="STR"
                          required
                          fullWidth
                        />
                        <Switch inputProps={{ "aria-label": "character-strength-saving-profiency" }} />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          id="character-dexterity-saving"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                +
                              </InputAdornment>
                            ),
                          }}
                          variant="filled"
                          type="number"
                          label="DEX"
                          required
                          fullWidth
                        />
                        <Switch inputProps={{ "aria-label": "character-dexterity-saving-profiency" }} />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          id="character-constitution-saving"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                +
                              </InputAdornment>
                            ),
                          }}
                          variant="filled"
                          type="number"
                          label="CON"
                          required
                          fullWidth
                        />
                        <Switch inputProps={{ "aria-label": "character-constitution-saving-profiency" }} />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          id="character-wisdom-saving"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                +
                              </InputAdornment>
                            ),
                          }}
                          variant="filled"
                          type="number"
                          label="INT"
                          required
                          fullWidth
                        />
                        <Switch inputProps={{ "aria-label": "character-intelligence-saving-profiency" }} />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          id="character-intelligence-saving"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                +
                              </InputAdornment>
                            ),
                          }}
                          variant="filled"
                          type="number"
                          label="WIS"
                          required
                          fullWidth
                        />
                        <Switch inputProps={{ "aria-label": "character-wisdom-saving-profiency" }} />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          id="character-charisma-saving"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                +
                              </InputAdornment>
                            ),
                          }}
                          variant="filled"
                          type="number"
                          label="CHA"
                          required
                          fullWidth
                        />
                        <Switch inputProps={{ "aria-label": "character-charisma-saving-profiency" }} />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={6}>
                        <Typography variant="h3" className="h1">
                          Skills
                        </Typography>
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
