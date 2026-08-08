// To add a blog post:
// 1. (Optional) Drop a cover image into src/assets/blog/
// 2. import cover1 from '../assets/blog/cover1.jpg'
// 3. Add a new object to blogPosts below with a unique slug
//
// post.content renders top to bottom, in order. Supported blocks:
//   { type: 'heading', text: '...' }
//   { type: 'paragraph', text: '...' }
//   { type: 'list', items: ['...', '...'] }
//   { type: 'image', src: someImport, alt: '...' }
//   { type: 'instagram', url: 'https://www.instagram.com/p/XXXXXXXXXXX/' }
//     ^ open the post/reel on Instagram, use "Copy link" (or the share icon),
//       and paste that URL here — it works for photo posts, reels, and videos.

export const blogPosts = [
  {
    slug: 'example-post',
    title: 'Example Post Title',
    date: 'August 8, 2026',
    cardImage: null,
    cardImageLabel: 'Blog post cover',
    excerpt:
      'A short one- or two-sentence summary shown on the blog card — swap this out for the real thing.',
    content: [
      {
        type: 'paragraph',
        text: 'This is the opening paragraph of the post. Replace it with real copy.',
      },
      { type: 'heading', text: 'An example subheading' },
      {
        type: 'paragraph',
        text: 'More body copy goes here. You can add as many paragraph and heading blocks as you need.',
      },
      { type: 'list', items: ['First point', 'Second point', 'Third point'] },
      // Uncomment and paste a real Instagram post/reel URL to embed it inline:
      { type: 'instagram', url: 'https://www.instagram.com/p/DY0xF0MIx1f/' },
      {
        type: 'paragraph',
        text: 'Closing paragraph, often with a call to action.',
      },
    ],
  },
]

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug)
}
