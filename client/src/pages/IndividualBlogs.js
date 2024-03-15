import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
// // import Comment from "./Comment";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import "../utils/blog.css";
import { formattedDate } from "../utils/formattedDate";
import { useSelector } from "react-redux";
import {
  getSingleBlog,
  dislikeBlog,
  likeBlog,
} from "../services/operations/blogAPI";
import { BiCommentDots, BiDislike, BiLike } from "react-icons/bi";
import { FaCalendarDay } from "react-icons/fa";

const IndividualBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getSingleBlog(id, token);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id, token]);
  console.log("blog", blog);
  if (!blog) {
    return <div>Loading...</div>; // Render loading indicator while blog is being fetched
  }

  const handleUpVote = async () => {
    try {
      await likeBlog(id, token);
      // Refresh the blog data after upvoting
      const response = await getSingleBlog(id, token);
      console.log("after liked", response);
      setBlog(response.data);
      console.log("blog liked");
    } catch (error) {
      console.error("Error upvoting blog:", error);
    }
  };

  const handleDownVote = async () => {
    try {
      await dislikeBlog(id, token);
      // Refresh the blog data after downvoting
      const response = await getSingleBlog(id, token);
      setBlog(response.data);
      console.log("blog disliked");
    } catch (error) {
      console.error("Error downvoting blog:", error);
    }
  };

  // const toggleComments = async (e) => {
  //   e.preventDefault();
  //   if (!showComments) {
  //     await handleGetComments();
  //   }
  //   if (showComments) setComments([]); // Clear comments when hiding
  //   setShowComments(!showComments);
  // };

  // const handleGetComments = async () => {
  //   try {
  //     setIsLoadingComments(true);
  //     const response = await getCommentsByBlogId(id, token); // Assuming there's a function to fetch comments by blog ID
  //     if (response) {
  //       setComments(response);
  //     } else {
  //       console.error("Error fetching comments");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching comments:", error);
  //   } finally {
  //     setIsLoadingComments(false);
  //   }
  // };

  // const handleAddComment = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await addCommentToBlog(id, comment, token); // Assuming there's a function to add a comment to a blog
  //     if (response) {
  //       // Update the local state or fetch the updated blog again
  //       setComment(""); // Clear the comment input
  //     } else {
  //       console.error("Error adding comment");
  //     }
  //   } catch (error) {
  //     console.error("Error adding comment:", error);
  //   }
  // };

  return (
    <div className="container">
      <div className="cs-blog-detail">
        <div className="cs-main-post">
          <figure>
            <img
              onLoad={() => {
                /* handle onLoad event */
              }}
              data-pagespeed-url-hash="2714250504"
              alt="jobline-blog (8)"
              src={blog?.coverImg}
            />
          </figure>
        </div>
        <div className="cs-post-title">
          <div className="cs-author">
            <div className="cs-text">
              <p className=" border-e-slate-900 bg-slate-200 p-3">
                {blog?.status}
              </p>
              <a
                href={`/auth/getUserByUsername/${blog?.createdBy?.username}`}
                className=" font-extrabold text-2xl uppercase"
              >
                {blog?.createdBy?.firstName} {blog?.createdBy?.lastName}
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-4 px-3 justify-end ">
            <span className="post-date">
              <i className="cs-color icon-calendar6"></i>
              <BiLike aria-hidden="true" size={20} onClick={handleUpVote} />
              {blog?.upvotes?.length}
            </span>
            <span className="post-date">
              {/* <i className="cs-color icon-calendar6"></i> */}
              <BiDislike
                aria-hidden="true"
                size={20}
                onClick={handleDownVote}
              />
              {blog?.downvotes?.length}
            </span>
            <span className="post-date">
              <FaCalendarDay />
              {formattedDate(blog?.createdBy?.createdAt)}
            </span>
            <span className="post-comment">
              <p className="">
                {" "}
                <BiCommentDots aria-hidden="true" size={20} />
                {blog?.comments?.length}
              </p>

              {/* </div> */}
            </span>
          </div>
        </div>
        <div className="cs-post-option-panel">
          <div className="rich-editor-text">
            <h2 className="text-slate-900 font-serif text-xl uppercase">
              {blog?.title}
            </h2>
            {/* <p></p>
            <p>
              After hamster hello less far astride where accordingly much
              because some far innocently invoked far pre-set or objective this
              pangolin tendentiously eagle near spread and overlay as abysmal a
              and before walrus much therefore some close victorious jeepers
              deeply forward while jeez and overlaid save hey ritually
              notwithstanding mounted about nonchalantly and less hence far like
              hey kissed. Hello impotent ravenous hey accordingly well much
              lopsidedly one far blinked lorikeet sternly futile jeepers strewed
              well following subconscious far on egregiously and away far alas
              much forward in but far opposite less editorial some together.
            </p> */}
            {/* <h4>Simple answer is, because other candidates won’t.</h4> */}
            {/* <p>
              Ravenously while stridently coughed far promiscuously below jeez
              much yikes bland that salamander cunningly some over abhorrent as
              house with between ouch that well scurrilously alas capybara
              massive outdid oh said hello majestically roadrunner lobster much
              bled alas lighted together waved upheld.
            </p> */}
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <blockquote className="text-left-align">
                <span> {blog?.content}</span>
              </blockquote>
            </div>
            <p></p>
          </div>
        </div>
        <div className="cs-tags">
          <div className="tags">
            {blog?.tags.map((tag, index) => (
              <span key={index}>
                <ul>
                  <li>
                    <a
                      rel="tag"
                      href="http://jobcareer.chimpgroup.com/jobdoor/tag/college/"
                    >
                      {tag}
                    </a>
                  </li>
                </ul>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualBlog;
