import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const HeroSection = () => {
  return (
    <Container className="fadeInUp">
      <Box sx={{maxWidth: "800px", py: 5, my: 5, mx: 'auto'}}>
        <Typography 
          variant="body1" 
          color="text.primary" 
          sx={{ mb: 1, fontWeight: 'bold', textAlign: 'center' }}
        >
          About us
        </Typography>
        <Typography 
          color="primary.main" 
          variant="h2" 
          sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }} 
          component="div"
        >
          The Ultimate DEX Platform For You
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 1, textAlign: 'center' }}>
          Axl is a Decentralized exchange with smart routing built on the Ethereum Chain (ETH) and Binance Smart Chain “BSC” and will support Liquidity Providing, Yield Farming, Staking, Launching IDO, NFT and Lending & borrow model. Starting with the Main token of the Ecosystem $AXL and Ending with $Axls as a reward token for the system.
        </Typography>
      </Box>
    </Container>
  );
}
 
export default HeroSection;
