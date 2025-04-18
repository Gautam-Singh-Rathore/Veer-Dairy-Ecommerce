import React from 'react'
import {content} from "../utils/BlogContent"
import { useNavigate } from 'react-router'

const BlogPage = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-[12vh] max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4 text-center text-green-600">Our Stories</h1>
      {content.map((blog) => (
        <div key={blog.id} className="mb-6 p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition">
          <p className="text-sm text-gray-500">{blog.category} • {blog.date}</p>
          <h2 className="text-2xl font-semibold mb-2 mt-1">{blog.by}</h2>
          <p className="text-gray-600 line-clamp-3">{blog.content}</p>
          <p
          onClick={()=> navigate(`/blog/${blog.id}`)}
            className="inline-block mt-4 text-blue-600 font-medium hover:underline cursor-pointer"
          >
            Read More →
          </p>
        </div>
      ))}
    </div>
  )
}

export default BlogPage
