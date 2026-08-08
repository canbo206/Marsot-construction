import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'
import './Blog.css'

function Blog() {
  return (
    <section className="blog page-section">
      <div className="container">
        <h1 className="blog__heading">Blog</h1>
        <p className="blog__intro">
          Tips, project stories, and updates from the Marsot Construction crew.
        </p>

        <div className="blog__grid">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} className="blog__card" key={post.slug}>
              <div className="blog__card-image">
                {post.cardImage ? (
                  <img src={post.cardImage} alt={post.cardImageAlt ?? post.title} />
                ) : (
                  <span className="blog__card-placeholder">
                    {post.cardImageLabel}
                  </span>
                )}
              </div>

              <div className="blog__card-body">
                <span className="blog__card-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blog__card-readmore">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
