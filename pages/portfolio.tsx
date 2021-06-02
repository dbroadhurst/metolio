import { Card } from 'primereact/card'
import { Timeline } from 'primereact/timeline'

import Head from 'components/head'
import Banner from 'components/banner'

import { formatDate } from 'utils/utils'

import { bio, BioInfo, BioPortfolio } from 'data/bio'

export default function Blog({ bio }: { bio: BioInfo }) {
  function customizedMarker(item: BioPortfolio) {
    return (
      <span className="custom-marker p-shadow-2" style={{ backgroundColor: 'var(--primary-color)' }}>
        <i className="pi pi-check"></i>
      </span>
    )
  }

  function customizedContent(item: BioPortfolio, index: number) {
    return (
      <Card
        title={
          <img
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            src={item.bannerImage}
            alt={item.title}
            className="p-shadow-2"
            width="100%"
          />
        }
        subTitle={`${item.title} - ${new Date(item.date).getFullYear()}`}>
        <p>{item.description}</p>
      </Card>
    )
  }

  return (
    <>
      <Head title={`${bio.name}`} desc={`${bio.name} Metolio Portfolio`} image={bio.portfolioThumbBannerImage} />

      <Banner bannerImage={bio.portfolioBannerImage} />

      <div className="timeline-demo">
        {bio?.portfolio?.length > 0 ? (
          <div className="card">
            <Timeline
              value={bio.portfolio}
              align="alternate"
              className="customized-timeline"
              marker={customizedMarker}
              content={customizedContent}
            />
          </div>
        ) : null}
      </div>
    </>
  )
}

export async function getStaticProps(context: any) {
  return {
    props: { bio },
  }
}
