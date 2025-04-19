import { blogPosts } from "../data/blogPosts";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';
export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Auto Tuning Blog – DPF, Remapping, AdBlue & More | MDDREMAP</title>
        <meta
          name="description"
          content="Read expert tuning insights on ECU remapping, DPF removal, AdBlue delete, performance upgrades and more. Stay updated with MDDREMAP Luton."
        />
        <meta
          name="keywords"
          content="ecu tuning blog, dpf removal blog, adblue delete info, remap stage 1 vs stage 2, car performance news, mddremap blog, luton tuning blog"
        />
        <link rel="canonical" href="https://mddremap.com/blog" />
        <meta name="robots" content="index, follow" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "MDDREMAP Auto Tuning Blog",
            "url": "https://mddremap.com/blog",
            "description":
              "Technical insights and tuning advice from ECU remapping specialists in Luton. Learn about DPF delete, AdBlue solutions, diagnostics and more.",
            "publisher": {
              "@type": "Organization",
              "name": "MDD MOVE LTD",
              "url": "https://mddremap.com"
            },
            "blogPost": blogPosts.slice(0, 5).map((post) => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "image": post.image,
              "url": `https://mddremap.com/blog/${post.slug}`,
              "datePublished": post.date,
              "description": post.summary
            }))
          })}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen flex flex-col justify-between bg-gray-50 dark:bg-black">
      <section className="max-w-6xl mx-auto px-4 pt-32 md:pt-40 pb-16 flex-grow">
      <h1 className="text-4xl font-bold text-center mb-6 dark:text-white">
            Car Tuning Blog – ECU, DPF, AdBlue & More
          </h1>
          <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Expert insights on remapping, diagnostics, fault code solutions, and tuning best practices. Learn from our real-world experience.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                to={`/blog/${post.slug}`}
                key={post.slug}
                className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 hover:scale-[1.02] transition-transform"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-xl mb-4 w-full h-48 object-cover"
                />
                <h2 className="text-2xl font-bold mb-2 dark:text-white">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {post.date}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {post.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
