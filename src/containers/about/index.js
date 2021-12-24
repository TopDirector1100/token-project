import { Fragment } from 'react'
import HeroSection from '../../components/about/HeroSection';
import PartnersSection from '../../components/home/PartnersSection';
import BridgeSection from '../../components/about/BridgeSection';
import NftPlatformSection from '../../components/about/NftPlatformSection';
import AlreadyConvincedSection from '../../components/about/AlreadyConvincedSection';
import FunFactSection from '../../components/about/FunFactSection';

export default function About() {
  return (
    <Fragment>
      <HeroSection />
      <PartnersSection />
      <BridgeSection />
      <NftPlatformSection />
      <FunFactSection />
      <AlreadyConvincedSection />
    </Fragment>
  ) 
}
