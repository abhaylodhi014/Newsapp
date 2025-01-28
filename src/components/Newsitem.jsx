import React, { useState } from "react";

const Newsitem = (props) => {
  const { title, discription, imageUrl, newsUrl, author, date, source } = props;

  // State to toggle "Show More" for the title
  const [isTitleExpanded, setIsTitleExpanded] = useState(false);

  // Define the maximum lengths for title and description
  const maxTitleLength = 50; // Truncate title if it exceeds this length
  const maxDescriptionLength = 100; // Truncate description if it exceeds this length

  // Function to handle "Show More" toggle
  const toggleTitle = () => {
    setIsTitleExpanded(!isTitleExpanded);
  };

  // Helper function to truncate text
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="my-3">
      <div className="card">
        {/* Badge for source */}
        <div
          className=""
          style={{
            display: "flex",
            marginTop: "-8px",
            justifyContent: "flex-end",
            right: "0",
            position: "absolute",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>

        {/* Image */}
        <img
          src={imageUrl}
          className="card-img-top"
          alt="News Thumbnail"
          style={{ height: "200px", objectFit: "cover" }}
        />

        {/* Card Body */}
        <div className="card-body">
          {/* Title */}
          <h5 className="card-title">
            {isTitleExpanded
              ? title
              : truncateText(title, maxTitleLength)}
            {title.length > maxTitleLength && (
              <button
                onClick={toggleTitle}
                className="btn btn-link btn-sm text-decoration-none"
                style={{ padding: 0, marginLeft: "5px" }}
              >
                {isTitleExpanded ? "Show Less" : "Show More"}
              </button>
            )}
          </h5>

          {/* Description */}
          <p className="card-text">
            {truncateText(discription || "No description available", maxDescriptionLength)}
          </p>

          {/* Author and Date */}
          <p className="card-text">
            <small className="text-body-secondary">
              By {author || "Unknown"} on {new Date(date).toUTCString()}
            </small>
          </p>

          {/* Read More Button */}
          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;


// import React, { Component } from 'react'
// // calss based se functioin karne per jaha kahi bhi this.props likha tha ab waha per sirf props bachega
// // export default class Newsitem extends Component {
//    const Newsitem = (props ) => {
//   // render(props) {
//    let  {title , discription ,imageUrl , newsUrl ,author ,date , source } = props;
//   //  ye java script mai ek method hoti jisse title or description nikelege || syntax is important
//     return ( 
//       <div className='my-3'>
//        <div className="card" >  
//         {/* ye yaha per style ko javascript ka object bana diya */}
//        <div className=''
//          style={{
//       dispay:'flex', 
//       marginTop:'-8px',
//       justifyContent:'flex-end',
    
//       right:'0',
//       position:'absolute',

     
//      }}>
//       <span className=" badge rounded-pill bg-danger " >{source}
//    </span> 
//     </div>

//     <img src={imageUrl} className="card-img-top" alt="..."/> 
//   <div className="card-body">
//     <h5 className="card-title">{title}</h5>
//     <p className="card-text">{discription}</p>
//     <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date (date).toUTCString()}</small></p>
    
//     <a href={newsUrl} target="_blank" className="btn btn-sm  btn-primary">Read More</a>
//     {/* agar href mai target="_blank" karte hai tu ek nai tab mai khul jata url */}
//   </div>
// </div>
//       </div>
//     )
//   }
//   export default Newsitem
// // }
