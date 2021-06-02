---
slug: coming-soon
title: Coming Soon
author: David Broadhurst
description: Coming soon blog. Just update the content folder with your blog
date: 1-June-2021
banner: '/placeholder-blog-banner.png'
---

# Coming Soon

## Here's an image

![Image Example](/placeholder-thumb-contact-banner.png)

## Code example

```javascript
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
```

# GFM

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a   | b   |   c |  d  |
| --- | :-- | --: | :-: |

## Tasklist

- [ ] to do
- [x] done
