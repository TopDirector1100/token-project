import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HighlightIcon from '@mui/icons-material/Highlight';

const FunFactSection = () => {
  return (
    <Box id="funFact" 
      sx={{
        py: 7,
        textAlign: 'center'
      }}
    >
      <Container>
        <HighlightIcon />
        <Typography 
          variant="h6" 
          component="div" 
          color="primary.main"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          Fun Fact
        </Typography>
        <Typography 
          variant="h3" 
          component="div" 
          sx={{ mb: 2, maxWidth: "800px", mx: 'auto', fontWeight: 500 }}
        >
          There are 10,000 unique collectible characters inspired by AXL INU and Contains 20 ELON&apos;s and 80 zombies.
        </Typography>
        <Button
          component={Link}
          to="/mint"
          endIcon={<ArrowForwardIcon />}>
          Mint an NFT Now
        </Button>
      </Container>
    </Box>
  );
}
 
export default FunFactSection;
