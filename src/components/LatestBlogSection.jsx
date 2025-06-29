import { latestBlog } from "../data/movies";

const BlogCard = ({ post }) => {
  return (
    <a href="#" className="block group">
      <div className="overflow-hidden rounded-md">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h4 className="text-white font-semibold mt-2 group-hover:text-blue-400 transition-colors">
        {post.title}
      </h4>
    </a>
  );
};

function LatestBlogSection() {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Latest Blog</h2>
        <a href="#" className="text-sm text-gray-400 hover:text-white">
          VIEW ALL
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {latestBlog.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default LatestBlogSection;
