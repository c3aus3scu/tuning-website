import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../data/blogPosts";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from 'react-helmet-async';
export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Header />
        <div className="text-center py-20 text-xl text-red-500">Post not found</div>
        <Footer />
      </>
    );
  }

  const extractMeta = (html, tag) => {
    const match = html.match(new RegExp(`<meta name="${tag}" content="(.*?)"\\s*/?>`, "i"));
    return match ? match[1] : "";
  };

  const metaTitle = post.title + " | mddremap";
  const metaDescription = extractMeta(post.content, "description");
  const metaKeywords = extractMeta(post.content, "keywords");

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
      </Helmet>

      <Header />

      <main className="bg-white dark:bg-black px-6 md:px-12 pt-40 pb-20">
      <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            <Link to="/" className="hover:underline">Home</Link> /
            <Link to="/blog" className="ml-1 hover:underline">Blog</Link> /
            <span className="ml-1 text-gray-800 dark:text-gray-200">{post.title}</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {post.title}
          </h1>

          {/* Date */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {post.date}
          </p>

          {/* Image */}
          <img
            src={post.image}
            alt={post.title}
            className="rounded-xl mb-6 w-full object-cover max-h-[400px]"
          />

          {/* Content */}
          <motion.article
  className="prose prose-gray dark:prose-invert text-gray-800 dark:text-gray-200 max-w-none"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <div className="text-inherit" dangerouslySetInnerHTML={{ __html: post.content }} />
</motion.article>
<div className="mt-16 border-t pt-10">
  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Related Posts</h3>
  <div className="grid md:grid-cols-2 gap-6">
    {blogPosts
      .filter(p => p.slug !== post.slug)
      .slice(0, 2)
      .map(p => (
        <Link
          to={`/blog/${p.slug}`}
          key={p.slug}
          className="block p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{p.summary}</p>
        </Link>
      ))}
  </div>
</div>


        </div>
      </main>

      <Footer />
    </>
  );
}
