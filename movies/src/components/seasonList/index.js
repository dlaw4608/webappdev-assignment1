import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import TvRoundedIcon from '@mui/icons-material/TvRounded';

export default function NestedList({seasons}) {
    const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Seasons
        </ListSubheader>
      }
      >
          {seasons.map((element) => (
                  <div key={element.name}>
              <ListItemButton onClick={handleClick}>
                  <ListItemText primary={element.name}></ListItemText>
                  {!open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
              <Collapse in={!open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <CalendarMonthRoundedIcon></CalendarMonthRoundedIcon>
                  </ListItemIcon>
                              <ListItemText primary={`Air Date: ${element.air_date}`} />
                          </ListItem>
                <ListItem sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <TvRoundedIcon></TvRoundedIcon>
                    </ListItemIcon>
                    <ListItemText primary={`Episode count: ${element.episode_count}`}></ListItemText>
                </ListItem>
              </List>
                      </Collapse>
                      </div>
            ))}
          </List>
  )
}
  