import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import certik from "../../assets/images/partners/certik.svg";
import polynetwork from "../../assets/images/partners/polynetwork.svg";
import binancechain from "../../assets/images/partners/binancechain.svg";
import oneInch from "../../assets/images/partners/1inch.svg";
import coinmarketcap from "../../assets/images/partners/coinmarketcap.svg";
import cointelegraph from "../../assets/images/partners/cointelegraph.svg";
import fairyproof from "../../assets/images/partners/fairyproof.png";

const partners = [
  {label: "polynetwork", src: polynetwork, href: "https://bridge.poly.network/token/AXL"},
  {label: "certik", src: certik, href: "https://www.certik.com/projects/axl-token"},
  {label: "binancechain", src: binancechain, href: "https://www.binance.org/"},
  {label: "coinmarketcap", src: coinmarketcap, href: "https://coinmarketcap.com/currencies/axl-inu/"},
  {label: "fairyproof", src: fairyproof, href: "https://www.fairyproof.com", width: 150},
  {label: "cointelegraph", src: cointelegraph, href: "https://cointelegraph.com/press-releases/axl-inu-token-presale-to-go-live-soon"},
  {label: "1inch", src: oneInch, href: "https://1inch.exchange/#/", width: 100},
  // {label: "bscscan", src: "/partners/bscscan.svg", href: "#"},
  // {label: "coingecko", src: "/partners/coingecko.svg", href: "#"},
]

const PartnersSection = () => {
  return (
    <Container sx={{pb: 5, mb: 5}} className="fadeInUp">
      <Grid 
        container 
        rowSpacing={4} 
        columnSpacing={2} 
        alignItems="center" 
        justifyContent="center"
      >
        {partners.map((partner, i) => (
          <Grid item xs={6} sm={4} md={2} key={i} sx={{textAlign: 'center'}}>
            <a
              href={partner.href}
              target="_blank" 
              rel="noreferrer" 
              style={{filter: 'grayscale(100%)'}}
            >
              <img 
                src={partner.src}
                alt={partner.label}
                width={partner.width || 160}
              />
            </a>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
 
export default PartnersSection;