// client/src/components/BlogList.jsx
import { blogPosts } from "../data/blogPosts";
import { Link } from "react-router-dom";

export default function BlogList() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {blogPosts.map(post => (
        <Link
          to={`/blog/${post.slug}`}
          key={post.slug}
          className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 hover:scale-[1.02] transition-transform"
        >
          <img src={post.image} alt={post.title} className="rounded-xl mb-4 w-full h-48 object-cover" />
          <h2 className="text-2xl font-bold mb-2 dark:text-white">{post.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{post.date}</p>
          <p className="text-gray-700 dark:text-gray-300">{post.summary}</p>
        </Link>
      ))}
    </div>
  );
}
