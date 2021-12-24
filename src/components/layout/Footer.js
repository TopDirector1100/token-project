import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import EmailIcon from '@mui/icons-material/Email';
import RedditIcon from '@mui/icons-material/Reddit';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import MediumIcon from '../ui/icons/Medium'
import DiscordIcon from '../ui/icons/Discord'
import certik from "../../assets/images/partners/certik.svg";
import fairyproof from "../../assets/images/partners/fairyproof.png";

const socialLinks = [
  {
    label: 'Twitter',
    icon: <TwitterIcon />,
    href: 'https://twitter.com/axltoken'
  },
  {
    label: 'Medium',
    icon: <MediumIcon />,
    href: 'https://axltoken.medium.com'
  },
  {
    label: 'Telegram',
    icon: <TelegramIcon />,
    href: 'https://t.me/AxlToken'
  },
  {
    label: 'Reddit',
    icon: <RedditIcon />,
    href: 'https://www.reddit.com/r/AxlToken'
  },
  {
    label: 'Instagram',
    icon: <InstagramIcon />,
    href: 'https://instagram.com/Axltoken'
  },
  {
    label: 'Discord',
    icon: <DiscordIcon />,
    href: 'https://discord.gg/axltoken'
  },
  {
    label: 'GitHub',
    icon: <GitHubIcon />,
    href: 'https://github.com/aevapay-code/AXl-Codes'
  },
]

const Footer = () => {
  return (
    <Container sx={{mt: 5}}>
      <Typography sx={{color: 'text.secondary', textAlign: 'center'}}>Audited by</Typography>
      <Stack 
        direction="row" 
        spacing={2} 
        mt={2}
        alignItems="center"
        justifyContent="center"
      >
        <a
          href="https://www.certik.com/projects/axl-token"
          target="_blank" 
          rel="noreferrer"
          style={{filter: 'grayscale(100%)'}}
        >
          <img 
            src={certik} 
            alt="Certik logo" 
            width="150" 
            height="35"
          />
        </a>
        <a
          href="https://www.fairyproof.com"
          target="_blank" 
          rel="noreferrer"
          style={{filter: 'grayscale(100%)'}}
        >
          <img 
            src={fairyproof} 
            alt="Fairyproof logo" 
            width="130" 
            height="35.95"
          />
        </a>
      </Stack>
      <Grid 
        container 
        spacing={2} 
        alignItems="center" 
        justifyContent="center"
        my={2}
      >
        {socialLinks.map((link) => (
          <Grid item xs={2} md={1} sx={{textAlign: 'center'}} key={link.label}>
            <IconButton 
              component="a"
              href={link.href}
              target="_blank"
              aria-label={link.label} 
            >
              {link.icon}
            </IconButton>
          </Grid>
        ))}
        <Grid item xs={2} md={1} sx={{textAlign: 'center'}}>
          <IconButton 
            component="a"
            href="mailto:info@axltoken.com"
            aria-label="Email"
          >
            <EmailIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Typography 
        variant="caption" 
        display="block"
        color="text.secondary"
        sx={{mt: 3, pb: 3, textAlign: 'center'}}
      >
        {'Copyright © '} {new Date().getFullYear()} AXL. All rights reserved. 
      </Typography>
    </Container>
  );
}
 
export default Footer;
