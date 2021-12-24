import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const statistics = [
  {
    label: "Pre Sale", 
    value: 25,
  },
  {
    label: "Staking Rewards", 
    value: 30,
  },
  {
    label: "Cex Reserved", 
    value: 20,
  },
  {
    label: "Team Locked For 3 Years", 
    value: 2.5,
  },
  {
    label: "Dex Liquidity", 
    value: 15,
  },
  {
    label: "Locked Incentives", 
    value: 6.5,
  },
  {
    label: "Airdrop", 
    value: 1,
  },
]

const TokenomicsSection = () => {
  return (
    <Box 
      id="tokenomics" 
      sx={{
        bgcolor: "grey.50", 
        py: 7, 
        borderBottom: 1, 
        borderColor: "grey.100"
      }}
    >
      <Container>
        <Typography 
          variant="h4" 
          component="div" 
          color="text.primary"
          sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}
        >
          Tokenomic
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 5, maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
          During the pre-sale, you will have the option to buy $AXL at a fixed rate of 0.00075 USD per 1 $AXL, pre-sale supports only ETH and BNB. All $AXL purchased can be claimed at the pre-sale page after the end of the vesting period "20-Jan".
        </Typography>
        <Typography 
          variant="h1" 
          component="div" 
          color="text.primary"
          sx={{ 
            fontWeight: 700, 
            textAlign: 'center', 
            color: 'primary.main',
          }}
        >
          100B
        </Typography>
        <Typography 
          variant="h6" 
          component="div"
          color="text.secondary"
          sx={{ mb: 5, textAlign: 'center' }}
        >
          Total Supply
        </Typography>
        <Card 
          elevation={0} 
          sx={{
            borderRadius: 5, 
            p: 2,
            boxShadow: '0 2px 16px rgb(53 69 89 / 5%)'
          }}
        >
          <CardContent>
            <Typography 
              variant="h5" 
              component="div" 
              color="text.primary"
              sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}
            >
              Tokenomic Statistics
            </Typography>
            {statistics.map((item, i) => (
              <Grid container key={i} sx={{mt: 2}}>
                <Grid item xs={12} md={4}>
                  <Typography 
                    variant="h6" 
                    component="span"
                    color="text.secondary"
                  >
                    {item.label}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Stack 
                    direction="row" 
                    spacing={2}
                    alignItems='center'
                  >
                    <Box sx={{width: '10%'}}>
                      <Typography 
                        variant="h6" 
                        component="span" 
                        sx={{mb: 0}}
                      >
                        {item.value}%
                      </Typography>
                    </Box>
                    <Box sx={{width: '90%'}}>
                      <BorderLinearProgress variant="determinate" value={item.value} />
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            ))}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
 
export default TokenomicsSection;
