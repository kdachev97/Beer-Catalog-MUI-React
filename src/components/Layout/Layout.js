import { Box } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Menu from "../Menu";
import theme from "./Theme";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Menu />
        <Box sx={{ width: '100%' }}>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Layout;