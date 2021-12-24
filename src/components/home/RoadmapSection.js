import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

const phaseI = [
  {text: "10K Holder", done: true},
  {text: "Full stage launching of the website", done: true},
  {text: "Official launch of the AXL NFT.", done: true},
  {text: "Listing on CMC/Coingecko", done: true},
  {text: "Basic/minimal scale marketing", done: true},
]

const phaseII = [
  {text: "CMC NFT airdrop", done: false},
  {text: "Stage 2 marketing", done: false},
  {text: "Launch of 2 staking pools", done: false},
  {text: "Stage 3 large marketing", done: false},
]

const phaseIII = [
  {text: "Coin listing on CEX", done: false},
  {text: "AXL DEX beta launch", done: false},
  {text: "AXL DEX live", done: false},
]

const phaseIV = [
  {text: "100k Holder", done: false},
  {text: "AXL DEX Lend & Borrow model", done: false},
  {text: "AXL DEX launch on BSC", done: false},
]

const phaseV = [
  {text: "AXL DEX Burn & Repurchase", done: false},
  {text: "Community Growth", done: false},
]

const phases = [
  {name: "Phase I", phase: phaseI, done: true},
  {name: "Phase II", phase: phaseII, done: false},
  {name: "Phase III", phase: phaseIII, done: false},
  {name: "Phase IV", phase: phaseIV, done: false},
  {name: "Phase V", phase: phaseV, done: false},
]

const RoadmapItemsRight = ({items}) => {
  return (
    <Timeline>
      {items.map((item, i) => (
        <TimelineItem key={i}>
          <TimelineOppositeContent sx={{ display: 'none' }} />
          <TimelineSeparator>
            <TimelineConnector sx={{bgcolor: 'grey.100'}} />
            <TimelineDot 
              variant={item.done ? 'filled' : 'outlined'} 
              sx={{boxShadow: 'none'}}
            ></TimelineDot>
            <TimelineConnector sx={{bgcolor: 'grey.100'}} />
          </TimelineSeparator>
          <TimelineContent sx={{ m: 'auto 0' }}>
            <Typography variant="h6" component="span" sx={{mb: 0}}>
              {item.text}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

const RoadmapItemsLeft = ({items}) => {
  return (
    <Timeline>
      {items.map((item, i) => (
        <TimelineItem key={i}>
          <TimelineOppositeContent sx={{ display: 'none' }} />
          <TimelineContent sx={{ m: 'auto 0' }}>
            <Typography variant="h6" component="span" sx={{mb: 0}}>
              {item.text}
            </Typography>
          </TimelineContent>
          <TimelineSeparator>
            <TimelineConnector sx={{bgcolor: 'grey.100'}} />
            <TimelineDot 
              variant={item.done ? 'filled' : 'outlined'} 
              sx={{boxShadow: 'none'}}
            ></TimelineDot>
            <TimelineConnector sx={{bgcolor: 'grey.100'}} />
          </TimelineSeparator>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

const Roadmap = () => {
  return (
    <Timeline position="alternate">
      {phases.map((phase, i) => (
        <TimelineItem key={i}>
          <TimelineOppositeContent sx={{ m: 'auto 0' }}>
            <Typography variant="h6" component="span" sx={{mb: 0}}>{phase.name}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{bgcolor: 'grey.100'}} />
            <TimelineDot
              sx={{boxShadow: 'none'}}
              variant={phase.done ? 'filled' : 'outlined'}
            ></TimelineDot>
            <TimelineConnector sx={{bgcolor: 'grey.100'}} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '15px'}}>
            {i % 2 === 0 
              ? <RoadmapItemsRight items={phase.phase} />
              : <RoadmapItemsLeft items={phase.phase} />
            }
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

const RoadmapMobile = () => {
  return (
    phases.map((phase, i) => (
      <Box key={i}>
        <Typography variant="h6" component="span">{phase.name}</Typography>
        <RoadmapItemsRight items={phase.phase} />
      </Box>
    ))
  )
}

const RoadmapSection = () => {

  return (
    <Box sx={{py: 7}}>
      <Container>
        <Typography 
          variant="h4" 
          component="div" 
          color="text.primary"
          sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}
        >
          Roadmap
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 5, textAlign: 'center' }}>
          This Roadmap outlines our future plans
        </Typography>
        <Box sx={{
          display: { xs: 'none', md: 'block' }
        }}>
          <Roadmap />
        </Box>
        <Box sx={{
          display: { xs: 'block', sm: 'none' }
        }}>
          <RoadmapMobile />
        </Box>

      </Container>
    </Box>
  );
}
 
export default RoadmapSection;