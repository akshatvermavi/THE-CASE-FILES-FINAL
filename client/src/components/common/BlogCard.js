// import React from "react";
// import "./card.css";
// import { Link } from "react-router-dom";
// import EditBlog from "../../pages/EditBlog";
// const BlogCard = ({
//   id,
//   date,
//   title,
//   author,
//   comments,
//   imageUrl,
//   content,
//   followers,
//   following,
//   downvotes,
//   upvotes,
//   onReadMore,
//   onEdit,
//   status,
// }) => {
//   // console.log("id of that blog", id);
//   const handleClick = () => {
//     if (status !== "Published") {
//       // Redirect to the edit blog page
//       <EditBlog edit={onEdit(id)} />;
//       // onEdit(id);
//     } else {
//       // Redirect to the individual blog page
//       onReadMore();
//     }
//   };
//   return (
//     <article className="card card-style2" onClick={handleClick}>
//       <div className="card-img">
//         <img className="rounded-top" src={imageUrl} alt="Blog Cover" />
//         <div className="date">
//           <span>{date}</span>
//         </div>
//       </div>
//       <div className="card-body">
//         <h3 className="h5">
//           <a href="#!">{title}</a>
//         </h3>
//         <p className="display-30">{content}</p>
//         <Link to={`/blog/getBlogs/${id}`} className="post-link">
//           Read More
//         </Link>
//       </div>
//       <div className="card-footer">
//         <ul>
//           <li>
//             <a href="#!">
//               <i className="fas fa-user"></i>
//               {author}
//             </a>
//           </li>
//           <li>
//             <a href="#!">
//               <i className="far fa-comment-dots"></i>
//               <span>{comments}</span>
//             </a>
//           </li>
//           <li>
//             <a href="#!">
//               <i className="fas fa-thumbs-down"></i>
//               <span>{downvotes}</span>
//             </a>
//           </li>
//           <li>
//             <a href="#!">
//               <i className="fas fa-thumbs-up"></i>
//               <span>{upvotes}</span>
//             </a>
//           </li>
//           {status !== "Published" && (
//             <button className="btn btn-primary bg-slate-500" onClick={onEdit}>
//               Edit
//             </button>
//           )}
//         </ul>
//       </div>
//     </article>
//   );
// };

// export default BlogCard;
import React from "react";
import "./card.css";
import { Link, useNavigate } from "react-router-dom";
import EditBlog from "../../pages/EditBlog";
import { BiComment, BiCommentDots, BiUserCircle } from "react-icons/bi";
import { FaHeart, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
const BlogCard = ({
  id,
  date,
  title,
  author,
  comments,
  imageUrl,
  content,
  followers,
  following,
  downvotes,
  upvotes,
  onReadMore,
  onEdit,
  category,
  // profileImg,
  status,
}) => {
  // console.log("id of that blog", id);
  const navigate = useNavigate();
  const handleClick = () => {
    if (status === "Draft") {
      // If blog status is "Draft", prevent both reading more and editing

      console.log("blog is drafted");
      return;
      // }

      // if (status !== "Published") {
      //   // Redirect to the edit blog page using history.push
      //   navigate(`/edit-blog/${id}`);
    } else {
      // Redirect to the individual blog page
      onReadMore();
    }
  };
  return (
    //     // <article className="card card-style2" onClick={handleClick}>
    //     //   <div className="card-img">
    //     //     <img className="rounded-top" src={imageUrl} alt="Blog Cover" />
    //     //     <div className="date">
    //     //       <span>{date}</span>
    //     //     </div>
    //     //   </div>
    //     //   <div className="card-body">
    //     //     <h3 className="h5">
    //     //       <a href="#!">{title}</a>
    //     //     </h3>
    //     //     <p className="display-30">{content}</p>
    //     //     <Link to={`/blog/getBlogs/${id}`} className="post-link">
    //     //       Read More
    //     //     </Link>
    //     //   </div>
    //     //   <div className="card-footer">
    //     //     <ul>
    //     //       <li>
    //     //         <a href="#!">
    //     //           <i className="fas fa-user"></i>
    //     //           {author}
    //     //         </a>
    //     //       </li>
    //     //       <li>
    //     //         <a href="#!">
    //     //           <i className="far fa-comment-dots"></i>
    //     //           <span>{comments}</span>
    //     //         </a>
    //     //       </li>
    //     //       <li>
    //     //         <a href="#!">
    //     //           <i className="fas fa-thumbs-down"></i>
    //     //           <span>{downvotes}</span>
    //     //         </a>
    //     //       </li>
    //     //       <li>
    //     //         <a href="#!">
    //     //           <i className="fas fa-thumbs-up"></i>
    //     //           <span>{upvotes}</span>
    //     //         </a>
    //     //       </li>
    //     //       {/* {status !== "Published" && (
    //     //         <button className="btn btn-primary bg-slate-500" onClick={onEdit}>
    //     //           Edit
    //     //         </button>
    //     //       )} */}
    //     //     </ul>
    //     //   </div>
    //     // </article>

    //   );
    // };
    // //   );
    // // };

    // export default BlogCard;
    <div className="product-card" onClick={handleClick}>
      <div className="badge">{status}</div>
      <div className="product-tumb">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-details">
        <span className="product-catagory">{category}</span>
        <h4>
          <a href="/">{title}</a>
        </h4>
        <p className="text-black">
          {content}
          {`...`}
        </p>
        <Link to={`/blog/getBlogs/${id}`} className="post-link">
          Read More
        </Link>
        <div className="product-bottom-details">
          <div className="product-price   ">
            {/* <img src={} alt="Profile Image" /> */}

            <BiUserCircle />
            {author}
          </div>

          <div className="product-links flex flex-row gap-6">
            <p className="h-2 font-semibold flex flex-row gap-2">
              <FaHeart size={24} />
              {upvotes}
            </p>
            {/* <FaThumbsDown size={24} />
        {downvotes.length} */}
            <p className="h-2 font-semibold flex flex-row gap-2">
              <BiCommentDots size={24} />
              {comments}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
