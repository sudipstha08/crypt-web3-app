import Head from 'next/head'
import {
  Header,
  CoverSection,
  MainIntroSection,
  IntroSection,
  FeatureSection,
  ContentSection,
  BrowseSection,
  ManageSection,
  PoweredSection,
  FooterSection,
} from '../../components'

const MomentoPage = () => {
  return (
    <>
      <Head>
        <title>Momento</title>
      </Head>
      <div>
        <Header />
        <CoverSection />
        <MainIntroSection />
        <IntroSection />
        <FeatureSection />
        <ContentSection />
        <BrowseSection />
        <ManageSection />
        <PoweredSection />
        <FooterSection />
      </div>
    </>
  )
}

export default MomentoPage
