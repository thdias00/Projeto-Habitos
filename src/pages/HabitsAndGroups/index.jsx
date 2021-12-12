import { Grid, Box, Typography } from "@mui/material";
import ResponsiveAppBar from "../../components/Header";
import HabitsComponent from "../../components/HabitsComponent";
import Grid6 from "../../components/Grids/Grid6";


const HabitsAndGroups = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Grid container spacing={2}>
        <Grid6 >
          <Box
            sx={{
              padding: '1rem',
              margin: '2rem',
              height: '90vh',
              backgroundColor: '#1B5E20',
            }}>
            <Typography
              color="white"
              padding="1rem 0 .6rem 0"
              align="center"
              component="h1"
              variant="h5">
              Meus Hábitos
            </Typography>
            <HabitsComponent/>
          </Box>
        </Grid6>
        <Grid6 >
          <Box
            sx={{
              padding: '1rem',
              margin: '2rem',
              height: '90vh',
              backgroundColor: '#47824A',
            }}>
            <Typography
              color="white"
              padding="1rem 0 .6rem 0"
              align="center"
              component="h1"
              variant="h5">
              Todos os Grupos
            </Typography>
            <h5>colocar o componente de grupos</h5>
          </Box>
        </Grid6>
      </Grid>
    </>
  )
}
export default HabitsAndGroups;