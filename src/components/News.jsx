import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResult] = useState(0);

  useEffect(() => {
    // Update document title when category changes
    document.title = `${props.category.toUpperCase()} - NewsToday`;

    // Fetch initial news
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateNews = async () => {
    props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true);
    let getdata = await fetch(url);
    let parsedata = await getdata.json();

    setArticles(parsedata.articles || []);
    setTotalResult(parsedata.totalResults || 0);
    setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pagesize}`;
    setPage((prevPage) => prevPage + 1); // Use functional state update
    let getdata = await fetch(url);
    let parsedata = await getdata.json();
    setArticles((prevArticles) => prevArticles.concat(parsedata.articles || []));
    setTotalResult(parsedata.totalResults || 0);
  };

  return (
    <>
      <div className="heading text-center" style={{ marginTop: "80px" }}>
        <h1 className="text-center">
          NewsToday - Top {props.category} Headlines
        </h1>
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={
          <div className="text-center">
            <div className="spinner-border my-3" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        }
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div className="col-md-4 my-2" key={element.url || index}>
                  <Newsitem
                    title={element.title || "No Title Available"}
                    discription={element.description || "No Description Available"}
                    imageUrl={
                      element.urlToImage ||
                      "https://i.insider.com/675b52f457df667cc5a5e8b0?width=1200&format=jpeg"
                    }
                    newsUrl={element.url}
                    author={element.author || "Unknown"}
                    date={element.publishedAt || "Unknown"}
                    source={element.source.name || "Unknown"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apikey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;



  //  static defaultProps = {
  //   country : 'us',
  //   pageSize: 8 ,
  //   category:'general'  
  //  }
  //  static propTypes={
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  //   badgecolor:PropTypes.string
  //  }


//this  is class based code 
        // json file dale ke jagah uske alag alg part ke variable bana lete hai
        // article varible hai

              //  constructor(props){
              //   // yaha jo bhi information hai phele se store data se a rahi hai na ke live data hai
              //   // likin ab jab componentdidMount se data lege tu wo live ayega
              //   super(props);
                
              //   // this.state = {
              //   //   articles: [],
              //   //   loading: true,
              //   //   page :1,
              //   //   totalresults : 0 
              //   //   // yaha per direct json file bhi daal sakte hai per acha nahi lagega
              //   // }
              //  document.title = `${(this.props.category).toUpperCase()} - NewsToday`
              //  }

// this is calss based 
          //  async updateNews(){
          //   const api = "2dba73b573834c5faab8a816e641087a"
          //   this.props.setProgress(20);
          //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`
          //   this.setState({
          //     loading:true
          //   })
          //   let getdata = await fetch(url);
          
          //   let parsedata = await getdata.json();

          //   this.setState({
          //     // page: this.state.page-1,
          //     articles: parsedata.articles,
          //     totalresults:parsedata.totalResults,
          //     loading:false,
            
          //   })
          //   this.props.setProgress(100);
          //  }
// Componentdid mount jo kaam kar raha hai wo ab useEFFect karega
//ye class based he hai per ye phli bhi comment tha yaha per individual function likhe the bad mai unko ek he function bana diya
                // async componentDidMount(){
                //   // const api_key = "2dba73b573834c5faab8a816e641087a"
                //   //   //sabse phele constructor run hoga phir render and then uske bad component did mount
                //   //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2dba73b573834c5faab8a816e641087a&pageSize=${this.props.pagesize}`
                //   //    this.setState({
                //   //     loading:true
                //   //   })
                //   //   let getdata = await fetch(url);
                //   //   let parsedata = await getdata.json();
                //   //   // server se jo bhi data ayega wo compresive file mai hoga usko json mai convert karna padta hai
                //   //   // console.log(parsedata);
                //   //  this.setState({ articles: parsedata.articles ,
                //   //    totalresults:parsedata.totalResults,
                //   //    loading:false  })

                //   // //parsedata mai jo articles naam se data tha wo yaha per articles mai a gaya hai state ke through

                //   this.updateNews();
                // }
                  // handlePrevClick = async() => {
                    
                  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2dba73b573834c5faab8a816e641087a&page=${this.state.page-1}&pageSize=${this.props.pagesize}`
                  //   //   this.setState({
                  //   //     loading:true
                  //   //   })
                  //   //   let getdata = await fetch(url);
                  //   //   let parsedata = await getdata.json();
                  //     // this.setState({
                  //       // page: this.state.page-1,
                  //       // articles: parsedata.articles,
                  //       // loading:false
                        
                  //     // })
                  //     this.setState({page : this.state.page-1})
                  //    this.updateNews()
                  //   //  class ke ander hone per her cheez ko aise he call karege
                  // }

                  // handleNextClick = async() => {
                  //   if(this.state.page +1 > Math.ceil(this.state.totalresults/this.props.pagesize )){

                  //   }
                  //   else{
                      
                  //   }
                  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2dba73b573834c5faab8a816e641087a&page=${this.state.page+1}&pageSize=${this.props.pagesize}`
                  //   // this.setState({
                  //   //   loading:true
                  //   // })
                  //   // let getdata = await fetch(url);
                  //   // let parsedata = await getdata.json();
                  //   // this.setState({
                      
                  //   //   page: this.state.page+1 ,
                    
                  //   //   articles: parsedata.articles ,

                  //   //   loading:false 
                  //   // })
                  //   this.setState({page : this.state.page+1})
                  //    this.updateNews()

                  // }

                  //  fetchMoreData = async () => {
                  //   // a fake async api call like which sends
                  //   // 20 more records in 1.5 secs
                  
                  //     this.setState({
                  //       page: this.state.page +1,
                  //     });
                  
                  //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2dba73b573834c5faab8a816e641087a&page=${this.state.page}&pageSize=${this.props.pagesize}`
                  //     // this.setState({
                  //     //   loading:true
                  //     // })
                  //     let getdata = await fetch(url);
                  //     let parsedata = await getdata.json();
                  //     this.setState({
                  //       // page: this.state.page-1,
                  //       articles: this.state.articles.concat(parsedata.articles),
                  //       totalresults:parsedata.totalResults,
                  //       // loading:false,
                        
                  //     })
                  // }

              //   render() {
              //     return (
              //       <>
              //       {/* <div className='container my-3 d-flex flex-column text-center'> */}
              //         <div className="heading text-center">
              //           <h1 className="">NewsToday-Top {(this.props.category)} Headlines</h1>
              //           </div> 
              //           {/* {this.state.loading && <div >
              //           <div className="spinner-border" role="status">
              //           <span className="sr-only"></span>
              //         </div> 
              //       </div>} */}
              //       <InfiniteScroll
              //           dataLength={this.state.articles.length}
              //           next={this.fetchMoreData}
              //           hasMore={this.state.articles.length !== this.totalresults}
              //           loader={<div className='text-center'>
              //             <div className="spinner-border my-3 " role="status">
              //             <span className="sr-only"></span>
              //           </div> 
              //         </div>}
              //         >
                        
                      
              //         <div className="container">
              //       <div className="row">
              //         {/*!this.state.loading &&   */ }  {this.state.articles.map((element) => {
              //         return   <div className="col-md-4 my-2"  key={element.url}>  
              //           {/* isko ek key prop dena he padta hai wo bhi unique hona caheye */}
              //           <Newsitem   title={element.title?element.title:""} discription={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://i.insider.com/675b52f457df667cc5a5e8b0?width=1200&format=jpeg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

              //             {/* or element.title? isliye aya hai kyuki ye kabhi kabhi null bhi ho sakta hai  */}
              //             {/* yaha per slice kara kyuki kise kise ka title/descripstion alar hota hai tu card ki length effect hoti hai */}
                      
                        
              //           </div>  
                      
              //         }) }</div>
              //         </div>
              //         </InfiniteScroll>
              //         {/* <div className="container d-flex justify-content-between">
              //           <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevClick} className="btn btn-primary"  >&larr; Previus </button>
              //           <button disabled={(this.state.page +1 > Math.ceil(this.state.totalresults/this.props.pagesize ))} type="button" onClick={this.handleNextClick} className="btn btn-primary" >Next &rarr;</button> 
              //           </div> */}
              //           {/* yaha per mannual buttun ki jagah hum infinite scroll ka use karege  */}
              //       {/* </div>  */}
              //       </>
                    
                  
              //     )
              //   }
              // }
              // export default  News  
              //     // video 26 - yaha per ek dikkat hai hum sirk first page ke artcle jo 20 hai unhe he acess kar pa rahe hai 
              //     // tu isse bachne ke liye hum ek nextpage or privius page ka button dege