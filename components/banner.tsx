import ImageLoader from 'components/imageLoader'

import { bio } from 'data/bio'

export default function Banner({ bannerImage }: { bannerImage: string }) {
  function Avatar() {
    return (
      <div className="p-p-1 p-shadow-2" style={{ width: 128, height: 128, padding: 8, background: 'var(--surface-a)' }}>
        <ImageLoader src={bio.avatarImage} alt={`${bio.name} avatar`} />
      </div>
    )
  }

  return (
    <div
      className="p-shadow-2"
      style={{
        position: 'relative',
        width: '100%',
        height: '30vw',
        minHeight: 240,
        maxHeight: 480,
        marginBottom: 128,
      }}>
      <ImageLoader src={bannerImage} alt="Banner" />
      <div style={{ position: 'absolute', bottom: '-64px', right: 32 }}>
        <div className="p-d-flex p-flex-row">
          <div className="p-d-flex p-flex-column p-jc-end p-ai-end p-mr-2">
            <h4>{bio.name}</h4>
            <small>{bio.email}</small>
          </div>
          <Avatar />
        </div>
      </div>
    </div>
  )
}
