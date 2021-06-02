import Link from 'next/link'

import Head from 'components/head'
import Banner from 'components/banner'
import ImageLoader from 'components/imageLoader'

import { formatDate } from 'utils/utils'

import { bio, BioInfo } from 'data/bio'

import matter from 'gray-matter'

export default function Blog({ bio, blogsInfo }: { bio: BioInfo; blogsInfo: any }) {
  const matterData = blogsInfo.map((blog: any) => matter(blog))
  const blogs = matterData.map((listItem: any) => listItem.data)

  return (
    <>
      <Head title={`${bio.name}`} desc={`${bio.name} Metolio Blogs`} image={bio.blogsThumbBannerImage} />

      <Banner bannerImage={bio.blogsBannerImage} />

      <div className="p-d-flex p-flex-column p-ai-center">
        <div className="p-col-12 p-lg-10">
          {blogs.map((blog: any, index: number) => (
            <div key={index} className="p-mb-4">
              <div className="p-grid p-dir-row p-col-12">
                <div className="p-d-flex p-ai-end">
                  <h4>{blog.title}</h4>
                  <small className="p-ml-2">{formatDate(blog.date)}</small>
                </div>
              </div>

              <Link href={`/blog/${blog.slug}`}>
                <a>
                  <div className="p-d-flex p-flex-row">
                    {blog.banner ? (
                      <div style={{ width: 128, height: 80 }}>
                        <ImageLoader src={blog.banner} alt="Blog Banner" />
                      </div>
                    ) : null}
                    <div className="p-col-10 p-ml-4" style={{ whiteSpace: 'pre-line' }}>
                      {blog.description}
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

async function getBlogs() {
  const fs = require('fs')
  const files = fs.readdirSync(`${process.cwd()}/content`, 'utf-8')
  const blogFiles = files.filter((fn: any) => fn.endsWith('.md'))

  const blogs = blogFiles.map((blog: any) => {
    const path = `${process.cwd()}/content/${blog}`
    const rawContent = fs.readFileSync(path, {
      encoding: 'utf-8',
    })

    return rawContent
  })

  return blogs
}

export async function getStaticProps(context: any) {
  const blogsInfo = await getBlogs()

  return {
    props: { bio, blogsInfo },
  }
}
