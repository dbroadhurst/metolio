import Link from 'next/link'

import Head from 'components/head'
import Banner from 'components/banner'
import ImageLoader from 'components/imageLoader'

import { bio, BioInfo } from 'data/bio'

export default function Home({ bio }: { bio: BioInfo }) {
  function Card({ title, url, image }) {
    return (
      <Link href={`/${url}`}>
        <a
          style={{ width: 320, height: 280, background: 'var(--surface-a)' }}
          className="p-d-flex p-flex-column p-justify-center p-align-center p-col-4 p-sm-4 p-shadow-2 p-m-2">
          <div style={{ width: 320, height: 200 }}>
            <ImageLoader src={image} alt={title} />
          </div>
          <h3 className="p-p-4">{title}</h3>
        </a>
      </Link>
    )
  }

  return (
    <>
      <Head title={`${bio.name}`} desc={`${bio.name} Metolio Homepage`} image={bio.avatarImage} />

      <Banner bannerImage={bio.homeBannerImage} />

      <div className="p-grid p-dir-row p-justify-center">
        <Card title="Contact Info" url="contact" image={bio.contactThumbBannerImage} />
        <Card title="My Resume" url="resume" image={bio.resumeThumbBannerImage} />
        <Card title="My Blogs" url="blogs" image={bio.blogsThumbBannerImage} />
        <Card title="My Porfolio" url="portfolio" image={bio.portfolioThumbBannerImage} />
      </div>
    </>
  )
}

export async function getStaticProps(context: any) {
  return {
    props: { bio },
  }
}
