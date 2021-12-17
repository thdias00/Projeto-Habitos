import {
  Grid,
  Box,
  Typography,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Stack,
  Fab,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GroupIcon from "@mui/icons-material/Group";
import ResponsiveAppBar from "../../components/Header";
import HabitsComponent from "../../components/HabitsComponent";
import { ContentContainer, DivGroups, HabitsAndGroupsContainer, SideContainer, UniqueContainer } from "./style";
import Grid6 from "../../components/Grids/Grid6";
import { useGroups } from "../../providers/groups";
import { useAuth } from "../../providers/auth";
import { useState } from "react";
import ComponentButton from "../../components/Button";
import AddIcon from "@mui/icons-material/Add";
import ModalBase from "../../components/ModalBase";
import GroupFormEdit from "../../components/GroupFormEdit";
import RenderGroups from "../../components/RenderGroups";
import GroupFormAdd from "../../components/GroupFormAdd";

const HabitsAndGroups = () => {
  const [navOption, setNavOption] = useState(0);

  const BottomBar = (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={navOption}
        onChange={(event, newValue) => {
          setNavOption(newValue);
        }}>
        <BottomNavigationAction label="Hábitos" icon={<FitnessCenterIcon />} />
        <BottomNavigationAction label="Grupos" icon={<GroupIcon />} />
      </BottomNavigation>
    </Paper>
  )

  return (
    <HabitsAndGroupsContainer>
      <ResponsiveAppBar />
      <ContentContainer>
        <SideContainer className='desktop'>
          <HabitsComponent/>
        </SideContainer>
        <SideContainer className='desktop'>
          <RenderGroups/>
        </SideContainer>
        
        {navOption === 0 ?
          <UniqueContainer className='mobile'>
            <HabitsComponent/>
          </UniqueContainer> :
          <UniqueContainer className='mobile'>
            <RenderGroups/>
          </UniqueContainer>}
        <div className='mobile'>
          {BottomBar}
        </div>
      </ContentContainer>
    </HabitsAndGroupsContainer>
  )
}
export default HabitsAndGroups