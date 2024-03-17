import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useRouter } from 'next/router';
import Image from "next/image";
import Logo from '../../public/defaultPokemon.png';

const Menu = () => {
  const router = useRouter();
  const menuItems = [
    {
      text: 'Pokemons',
      icon: <CatchingPokemonIcon sx={{ color: '#301934' }} />,
      path: '/pokemons'
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
          src={Logo}
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