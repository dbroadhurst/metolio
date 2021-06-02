export default function ImageLoader({ ...props }) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <img
        className="image-loader"
        style={{ objectFit: 'cover', objectPosition: 'center', ...props.style }}
        width="100%"
        height="100%"
        {...props}
      />
    </div>
  )
}
