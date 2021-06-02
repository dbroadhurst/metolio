import Head from 'components/head'
import ImageLoader from 'components/imageLoader'

import { bio } from 'data/bio'

export default function Contact() {
  const linkInfo = [
    { name: 'twitterLink', icon: '/twitter-logo.svg', label: 'Twitter' },
    { name: 'facebookLink', icon: '/facebook-logo.svg', label: 'Facebook' },
    { name: 'linkedinLink', icon: '/linkedin-logo.svg', label: 'LinkedIn' },
    { name: 'instagramLink', icon: '/instagram-logo.svg', label: 'Instagram' },
    { name: 'githubLink', icon: bio.darkTheme ? '/github-light.png' : '/github-dark.png', label: 'Github' },
    { name: 'gitlabLink', icon: '/gitlab-logo.svg', label: 'Gitlab' },
  ]

  function getLink(index: number, link: any) {
    if (bio[link.name].length === 0) {
      return null
    }

    return (
      <a key={index} className="p-m-1" href={bio[link.name]} target="_blank">
        <div style={{ width: 24, height: 24 }}>
          <ImageLoader src={link.icon} alt="Social Icon" />
        </div>
      </a>
    )
  }

  return (
    <>
      <Head title={`${bio.name}`} desc={`${bio.name} Metolio Contact`} image={bio.contactThumbBannerImage} />

      <div style={{ height: '80vh' }} className="p-grid p-dir-column p-justify-center p-align-center p-m-0">
        <div
          style={{ background: 'var(--surface-a)' }}
          className="p-col-10 p-sm-6 p-md-5 p-lg-4 p-shadow-8 p-my-4 p-p-0">
          <div className="p-d-flex p-justify-center">
            <div
              style={{
                width: '100%',
                height: '20vw',
                minHeight: 240,
                maxHeight: 320,
              }}>
              <ImageLoader src={bio.contactBannerImage} alt="Contact Banner" />
            </div>
          </div>

          <div className="p-col-12 p-m-2">
            <div className="p-d-flex p-flex-column p-justify-center p-align-center p-mb-2">
              <h3>{bio.name}</h3>
              <div>{bio.email}</div>
            </div>
            <div>{bio.street}</div>
            <div>{bio.city}</div>
            <div>{bio.state}</div>
            <div>{bio.zip}</div>
            {bio.telephone ? <div className="p-mb-1">Tel. {bio.telephone}</div> : null}
          </div>
          <div className="p-col-12 p-m-2">
            <div className="p-d-flex p-flex-row p-justify-center p-align-center p-mb-2">
              {linkInfo.map((link: any, index: number) => {
                return getLink(index, link)
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(context: any) {
  return {
    props: { bio },
  }
}
