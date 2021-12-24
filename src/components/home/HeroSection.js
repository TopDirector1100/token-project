import { Link } from "react-router-dom"
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logoArt from "../../assets/images/logo-blue-art.png";

const HeroSection = () => {
  return (
    <Container className="fadeInUp">
      <Stack 
        direction="row"
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box sx={{maxWidth: "800px", py: 5, mb: 5, mx: 'auto'}}>
          <Typography 
            color="primary.main" 
            variant="h2" 
            sx={{ fontWeight: 'bold', mb: 3}} 
            component="div"
          >
            ADOPT AN NFT TODAY
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Axl is a Decentralized exchange with smart routing on ETH Chain (ETH) and Binance Smart Chain (BSC) that will supports Liquidity Providing, Yield Farming, Staking, Launching IDO, NFT and Lending & borrow. Starting with the Main token of the Eco System $AXL and Ending with $Axls as a reward token for the system.
          </Typography>
          {/* <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            There are 10,000 unique collectable characters inspired by AXL INU and Contains 20 ELON&apos;s and 80 zombies.
          </Typography> */}
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ mb: 2, fontWeight: 700 }}
          >
            We will start with NFT and End with DEX
          </Typography>
          <Stack
            direction="row"
            spacing={2}
          >
            <Button
              component={Link}
              to="/pre-sale"
              disableElevation 
              variant="contained" 
              endIcon={<ArrowForwardIcon />}>
              Get AXL
            </Button>
            <Button 
              component="a"
              href={process.env.REACT_APP_AXL_WHITEPAPER_URL}
              target="_blank" 
              rel="noopener noreferrer"
              endIcon={<ArrowDownwardIcon />}>
              AXL whitepaper
            </Button>
          </Stack>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <img 
            src={logoArt}
            alt="AXL blue art" 
            width="350"
          />
        </Box>
      </Stack>
    </Container>
  );
}
 
export default HeroSection;
