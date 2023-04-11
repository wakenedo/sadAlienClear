import '../styles/global.css'

import type { NextPage } from "next";
import { DefaultCTA } from 'components/Default/DefaultCTA';
import DefaultOptions from 'components/Default/DefaultOptions';
import DefaultSteps from 'components/Default/DefaultSteps';
import { DefaultThreeParagraph } from 'components/Default/DefaultThreeParagraphs';
import DefaultButtons from 'components/Default/DefaultButtons';
import { DefaultTeam } from 'components/Default/DefaultTeam';
import DefaultCarousel from 'components/Default/DefaultCarousel';
import DefaultSectionHistory from 'components/Default/DefaultSectionHistory';
import DefaultPartnersLogos from 'components/Default/DefaultPartnersLogos';
import { DefaultThreeParagraphBackground } from 'components/Default/DefaultThreeParagraphBackground';
import { DefaultSectionNumbers } from 'components/Default/DefaultSectionNumbers';
import DefaultHeadSection from 'components/Default/DefaultHeadSection';
import DefaultHeadSectionFullWidth from 'components/Default/DefaultHeadSectionFullWidth';
import { DefaultHorizontalCTA } from 'components/Default/DefaultHorizontalCTA';
import DefaultSectionTextAndImage from 'components/Default/DefaultSectionTextAndImage';
import { DefaultSectionTopics } from 'components/Default/DefaultSectionTopics';




const Components: NextPage = () => {
  return (
    <>
      <title>{` Sad Alien Clear | Components  `}</title>
      <DefaultHeadSectionFullWidth />
      <DefaultHeadSection />
      <DefaultSectionTopics />
      <DefaultHorizontalCTA />
      <DefaultCTA />
      <DefaultOptions />
      <DefaultSectionTextAndImage />
      <DefaultSectionHistory />
      <DefaultSteps />
      <DefaultThreeParagraph />
      <DefaultThreeParagraphBackground />
      <DefaultCarousel />
      <DefaultButtons />
      <DefaultPartnersLogos />
      <DefaultSectionNumbers />
      <DefaultTeam />
    </>
  );
};

export default Components;