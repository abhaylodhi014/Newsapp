
import "./App.css"
import React, { useState } from 'react'
import News from "./components/News"
import LoadingBar from 'react-top-loading-bar'
import{ BrowserRouter as Router,Routes ,Route} from "react-router-dom";
import NavBar from "./components/navbar";

const App = (props) => {
  // apiKey=process.env.REACT_APP_NEWS_APP
  // yaha per api key ko hide karne ki koshis kari thi per hue nahi
 
 const apiKey="2dba73b573834c5faab8a816e641087a"
const [progress , setProgress] = useState(0)
  setProgress({progress})
    return ( 
       <>
      <div>
        <Router>
        <NavBar/>

    <LoadingBar
       height='3px'
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)} 
      />
    <Routes>
      <Route exact path="/"   element={ <News setProgress={setProgress}  apikey={ apiKey}  key="general" pagesize={6} country={'us'}  />}  > </Route>
      <Route exact path="/general"  element={ <News setProgress={setProgress}  apikey={ apiKey}  key="general" pagesize={6} country={'us'} category={'general'} />}  > </Route>
      <Route exact path="/bussiness"   element={<News  setProgress={setProgress} apikey={ apiKey}  key="bussiness" pagesize={6} country={'us'} category={'bussiness'}/> } > </Route>
      <Route exact path="/entertainment"  element={<News  setProgress={setProgress} apikey={ apiKey}  key="entertainment" pagesize={6} country={'us'} category={'entertainment'} /> }  > </Route>
      <Route exact path="/health"  element={<News  setProgress={setProgress} apikey={ apiKey}  key="health" pagesize={6} country={'us'} category={'health'}  /> }  > </Route>
      <Route exact path="/science"   element={<News  setProgress={setProgress} apikey={ apiKey}  key="science" pagesize={6} country={'us'} category={'science'}/> } > </Route>
      <Route exact path="/sports"   element={<News  setProgress={setProgress} apikey={ apiKey}  key="sports" pagesize={6} country={'us'} category={'sports'} /> } > </Route>
      <Route exact path="/technology"   element={  <News setProgress={setProgress}  apikey={ apiKey}  key="technology" pagesize={6} country={'us'} category={'technology'} />} ></Route>

      {/* abhi ek problem hai jab bhi kisi category per click karege navbar mai se tu sirf link change hoga na ki wo news change hogi
      uskko change karne  ke liye hum ek unique key pass karege jo differentiate karega*/}
    </Routes>
   
    </Router>
    </div>
      
 
    </>
    )
  }
export default  App


// class based component
          // import "./App.css"

          // import React, { Component } from 'react'
          // import NavBar from "./components/navbar"
          // import News from "./components/News"
          // import LoadingBar from 'react-top-loading-bar'
          // import{
          //   BrowserRouter as Router,
          //   Routes ,
          //   Route,
          
            
          // } from "react-router-dom";

          // export default class App extends Component {
          //   // apiKey=process.env.REACT_APP_NEWS_APP
          //   // yaha per api key ko hide karne ki koshis kari thi per hue nahi
          //   apiKey="2dba73b573834c5faab8a816e641087a"
          //   state = {
          //     progress :5 ,

          //   }
          //   setProgress = (progress) =>{
          //     this.setState({
          //       progress:progress,
          //     })
          //   }
          //   render() {
          //     return ( 
          //        <>
          //       <div>
          //         <Router>
          //     <NavBar/>

          //     <LoadingBar
          //        height='3px'
          //         color='#f11946'
          //         progress={this.state.progress}
          //         // onLoaderFinished={() => setProgress(0)} 
          //       />
          //     <Routes>
          //       <Route exact path="/"   element={ <News setProgress={this.setProgress}  apikey={ this.apiKey}  key="general" pagesize={6} country={'us'}  />}  > </Route>
          //       <Route exact path="/general"  element={ <News setProgress={this.setProgress}  apikey={ this.apiKey}  key="general" pagesize={6} country={'us'} category={'general'} />}  > </Route>
          //       <Route exact path="/bussiness"   element={<News  setProgress={this.setProgress} apikey={ this.apiKey}  key="bussiness" pagesize={6} country={'us'} category={'bussiness'}/> } > </Route>
          //       <Route exact path="/entertainment"  element={<News  setProgress={this.setProgress} apikey={ this.apiKey}  key="entertainment" pagesize={6} country={'us'} category={'entertainment'} /> }  > </Route>
          //       <Route exact path="/health"  element={<News  setProgress={this.setProgress} apikey={ this.apiKey}  key="health" pagesize={6} country={'us'} category={'health'}  /> }  > </Route>
          //       <Route exact path="/science"   element={<News  setProgress={this.setProgress} apikey={ this.apiKey}  key="science" pagesize={6} country={'us'} category={'science'}/> } > </Route>
          //       <Route exact path="/sports"   element={<News  setProgress={this.setProgress} apikey={ this.apiKey}  key="sports" pagesize={6} country={'us'} category={'sports'} /> } > </Route>
          //       <Route exact path="/technology"   element={  <News setProgress={this.setProgress}  apikey={ this.apiKey}  key="technology" pagesize={6} country={'us'} category={'technology'} />} ></Route>

          //       {/* abhi ek problem hai jab bhi kisi category per click karege navbar mai se tu sirf link change hoga na ki wo news change hogi
          //       uskko change karne  ke liye hum ek unique key pass karege jo differentiate karega*/}
          //     </Routes>
            
          //     </Router>
          //     </div>
                
          
          //     </>
          //     )
          //   }
          // }


