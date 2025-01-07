import React, { Component } from 'react'
// calss based se functioin karne per jaha kahi bhi this.props likha tha ab waha per sirf props bachega
// export default class Newsitem extends Component {
   const Newsitem = (props ) => {
  // render(props) {
   let  {title , discription ,imageUrl , newsUrl ,author ,date , source } = props;
  //  ye java script mai ek method hoti jisse title or description nikelege || syntax is important
    return ( 
      <div className='my-3'>
       <div className="card" >  
        {/* ye yaha per style ko javascript ka object bana diya */}
       <div className=''
         style={{
      dispay:'flex', 
      marginTop:'-8px',
      justifyContent:'flex-end',
    
      right:'0',
      position:'absolute',

     
     }}>
      <span className=" badge rounded-pill bg-danger " >{source}
   </span> 
    </div>

    <img src={imageUrl} className="card-img-top" alt="..."/> 
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{discription}</p>
    <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date (date).toUTCString()}</small></p>
    
    <a href={newsUrl} target="_blank" className="btn btn-sm  btn-primary">Read More</a>
    {/* agar href mai target="_blank" karte hai tu ek nai tab mai khul jata url */}
  </div>
</div>
      </div>
    )
  }
  export default Newsitem
// }
