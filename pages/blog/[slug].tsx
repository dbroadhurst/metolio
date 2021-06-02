import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai, docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import gfm from 'remark-gfm'

import Head from 'components/head'
import Banner from 'components/banner'

import { bio } from 'data/bio'

import type { CodeComponent } from 'react-markdown/src/ast-to-react'
type CodeProps = Parameters<CodeComponent>[0]

export default function Blog({
  slug,
  blog,
  bannerImage,
  info,
}: {
  slug: string
  blog: string
  bannerImage: string
  info: any
}) {
  const components = {
    code({ node, inline, className, children, ...props }: CodeProps) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          style={bio.darkTheme ? monokai : docco}
          language={match[1]}
          PreTag="div"
          children={String(children).replace(/\n$/, '')}
          {...props}
        />
      ) : (
        <code className={className} {...props} />
      )
    },
  }

  return (
    <>
      <Head title={info.title} desc={info.description} image={bannerImage} />
      <Banner bannerImage={bannerImage} />

      <ReactMarkdown remarkPlugins={[gfm]} children={blog} components={components} />
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

export async function getStaticPaths() {
  const blogsInfo = await getBlogs()
  const matterData = blogsInfo.map((blog: any) => matter(blog))
  const blogs = matterData.map((listItem: any) => listItem.data)

  const paths = blogs.map((blog: any) => {
    return { params: { slug: blog.slug } }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const content = await import(`content/${params.slug}.md`)
  const matterData = matter(content.default).data
  const data = matter(content.default)

  return {
    props: {
      slug: params.slug,
      bannerImage: matterData.banner,
      blog: data.content,
      info: matterData,
    },
  }
}
