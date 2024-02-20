import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import { useRouter } from 'next/router';
import Image from "next/image";
import BeerJs from '../../public/beerJs.png';

const Menu = () => {
  const router = useRouter();
  const menuItems = [
    {
      text: 'Beers',
      icon: <SportsBarIcon sx={{ color: '#301934' }} />,
      path: '/beers'
    },

    {
      text: 'My Account',
      icon: <PersonOutlineIcon sx={{ color: '#301934' }} />,
      path: '/myAccount'
    }
  ];

  return (
    <Drawer
      sx={{
        width: {
          xs: 200,
          lg: 240
        },
        '& .MuiDrawer-paper': {
          width: {
            xs: 200,
            lg: 240
          },
          backgroundColor: 'inherit'
        }
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '15px'
        }}
      >
        <Image
          src={BeerJs}
          height={130}
          width={130}
          alt={'website logo'}
          objectFit='contain'
          style={{ cursor: 'pointer' }}
          priority
          onClick={() => router.push('/')}
        />
      </Box>

      <List>
        {menuItems.map(item => (
          <ListItemButton
            data-cy={item.text}
            key={item.text}
            onClick={() => router.push(item.path)}
          >
            <ListItemIcon
              sx={{ minWidth: '30px' }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  )
}

export default Menu;