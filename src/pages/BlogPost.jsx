import { Link, Navigate, useParams } from 'react-router-dom'
import { getPostBySlug } from '../data/blog'
import InstagramEmbed from '../components/InstagramEmbed'
import './BlogPost.css'

function BlogPostContent({ block, index }) {
  switch (block.type) {
    case 'heading':
      return <h2 key={index}>{block.text}</h2>
    case 'paragraph':
      return <p key={index}>{block.text}</p>
    case 'list':
      return (
        <ul key={index}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'image':
      return (
        <div className="blog-post__image" key={index}>
          <img src={block.src} alt={block.alt ?? ''} />
        </div>
      )
    case 'instagram':
      return <InstagramEmbed url={block.url} key={index} />
    default:
      return null
  }
}

function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <article className="blog-post">
      <header className="blog-post__hero">
        <div className="container">
          <Link to="/blog" className="blog-post__back">
            ← Back to Blog
          </Link>
          <h1>{post.title}</h1>
          <p className="blog-post__date">{post.date}</p>
        </div>
      </header>

      {post.cardImage && (
        <div className="container blog-post__cover">
          <img src={post.cardImage} alt={post.cardImageAlt ?? post.title} />
        </div>
      )}

      <div className="container blog-post__body">
        {post.content.map((block, index) => (
          <BlogPostContent block={block} index={index} key={index} />
        ))}
      </div>

      <div className="container blog-post__cta">
        <Link to="/#contact" className="btn">
          Get a Free Estimate
        </Link>
      </div>
    </article>
  )
}

export default BlogPost
