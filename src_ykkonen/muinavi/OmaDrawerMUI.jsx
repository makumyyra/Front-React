import { useState } from 'react';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';

function OmaDrawerMUI() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Box>
            <IconButton onClick={handleOpen} color='inherit'><MenuIcon /></IconButton>
            <Drawer anchor='left' open={open} onClick={handleClose}>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon><InfoIcon /></ListItemIcon>
                            <ListItemText primary='Tietoja' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon><PersonIcon /></ListItemIcon>
                            <ListItemText primary='Omat tiedot' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}

export default OmaDrawerMUI; 