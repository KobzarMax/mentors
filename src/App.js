import { Box, Container, Typography } from '@mui/material';
import Mentors from './components/Mentors';

function App() {
  return (
    <Container>
      <Box
        component="section"
        display="flex"
        flexDirection="column"
        className="mentors-block"
        sx={{ 
          paddingTop: "176px", 
          marginBottom: {
            md: "60px",
            xs: "40px"
          }, 
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          massages: "20px"
        }}
      >
        <Typography variant="h2" component="h4" textAlign="center" p="0 20px" className='mentors-title'
          sx={{
            color: "#ffffff",
            fontSize: {
              xl: "72px",
              lg: "64px",
              md: "58px",
              sm: "50px",
              xs: "48px"
            },
            fontFamily: "'Iceland', cursive",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)"
          }}
        >
          Profile of profiles
        </Typography>
      </Box>
      <Box>
        <Mentors/>
      </Box>
    </Container>
    
  );
}

export default App;
