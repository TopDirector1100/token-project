import { Fragment } from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import PhaseI from '../../components/pre-sale/PhaseI/Renderer';
import PreSaleSteps from 'components/pre-sale/PreSaleSteps';

export default function PreSale() {
  return (
    <Fragment>
      <Container>
        <Box sx={{mb: 4}}>
          <Typography 
            color="primary.main" 
            variant="h4" 
            sx={{ fontWeight: 'bold', mb: 1}} 
            component="div"
          >
            Pre-sale
          </Typography>
          <Typography variant="body1" color="text.secondary">
            During the pre-sale, you will have the option to buy $AXL. All $AXL purchased can be claimed after the end of the vesting period "20-Jan".
          </Typography>
        </Box>
      </Container>
      <Box 
        sx={{
          bgcolor: "grey.50", 
          py: 7, 
          borderTop: 1, 
          borderBottom: 1, 
          borderColor: "grey.100",
          mb: 4
        }}
      >
        <Container>
          <Typography 
            color="text.primary"
            sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}
            variant="h5"
          >
            IDO
          </Typography>
          <Typography 
            variant="body1" color="text.secondary" 
            sx={{ mb: 2, textAlign: 'center', maxWidth: 600, mx: 'auto' }}
          >
            Grab your AXL token now and enjoy vast benefits that come along with being a part of us.
          </Typography>
          <PreSaleSteps />
          <PhaseI />
        </Container>
      </Box>
    </Fragment>
  )
}
