import { React, useState} from 'react'
// Router
import { Link } from "react-router-dom";
// Icon
import { FaLocationDot } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";

const PaginationList = ({posts, rating, categories, postsPerPage = 5}) => {

  // Current page start with 1
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate Total page (Math.ceil ex: 0.95 => 1)
  const totalPages = Math.ceil(posts.length / postsPerPage);
  // Start page (ex: (1 - 1) * 5 = 0
  //                 (2 - 1) * 5 = 5)
  const start = (currentPage - 1) * postsPerPage;
  // CurrentPosts in this page (ex: posts.slice(0, 0 + 5) = (0, 5) => 0 1 2 3 4
  //                                posts.slice(5, 5 + 5) = (5, 10) => 5 6 7 8 9)
  const currentPosts = posts.slice(start, start + postsPerPage);

  // Go to the page that user click
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
    {currentPosts.map((post, index) => (
    <Link to={`/foodPost/${post.id}`} key={index} className='flex justify-center mt-10 cursor-pointer'>
      <div className='flex gap-5 bg-white w-275 max-sm:w-[100%] p-5 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
          <div className=''>
              <img src={post.image} className='w-60 h-50 object-cover bg-[#D9D9D9] rounded-lg'/>
          </div>
          <div className=''>
              <h1 className='text-[36px] font-semibold max-sm:text-[24px]'>{post.name.length > 19 ? post.name.substring(0,19) + "..." : post.name}</h1>
              <div className='flex justify-center items-center w-15 gap-1 bg-[#DE0000] px-2 rounded-sm'>
                  <p className='text-white text-[16px] font-semibold'>{rating.find(r => r.foodPostId === post.id)?.rating ?? "N/A"}</p>
                  <IoIosStar className='text-white text-[14px]'/>
              </div>
              <p className='text-[#A9A9A9] text-[20px] max-sm:text-[16px]'>{post.comment.length} {post.comment.length > 1 ? "reviews" : "review"}</p>
              <div className='flex items-center gap-3'>
                  <FaLocationDot className='text-[20px]'/>
                  <p className='font-semibold text-[20px] max-sm:text-[16px]'>{post.location}</p>
              </div>
              <div className='flex gap-5 mt-5 max-sm:grid max-sm:grid-cols-2'>
                  {(categories[post.id] || []).map((category, index) => (
                      <div key={index} className=''>
                          <p className='border-2 text-center px-2 py-1 rounded-lg text-[18px] font-semibold max-sm:text-[14px]'>{category}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </Link>
    ))}

    {/* Pagination controls */}
    <div className="flex justify-center gap-2 mt-6 mb-10">
      <button
        className="px-3 py-1 border rounded disabled:opacity-50"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`px-3 py-1 border rounded ${
            currentPage === i + 1 ? 'bg-[#DE0000] text-white font-bold' : ''
          }`}
          onClick={() => goToPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button
        className="px-3 py-1 border rounded disabled:opacity-50"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
    </>
  )
}

export default PaginationList