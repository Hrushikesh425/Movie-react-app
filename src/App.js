import { useState,useEffect } from "react";
import './App.css';


function App() {
  
  let [movieinfo,setMovieinfo]=useState(null);
  let [title,setTitle]=useState("scam 1992")
  
  useEffect(()=>{
  
    getMovieData();
  
  },[])


  function readTitle(value){
    setTitle(value);
  }

  function getMovieData(){
    let url=`https://omdbapi.com/?t=${title}&apikey=d5cfdf68`;
  
  fetch(url)
  .then((response)=>response.json())
  .then((movie)=>{
    console.log(movie);
    setMovieinfo(movie);
  })
  .catch((err)=>{
    console.log(err);
  })
  }




  return (
    <div className="App">
        
        
    <div className="container">
      <div className="padd">
        <h1 className="title-grp">Movie Serach</h1>
        <div className="form-grp">
          <input type="text" placeholder="Enter Movie Name" onChange={(event)=>{readTitle(event.target.value)}} className="search-field" />
          <button className="btn " onClick={getMovieData}>Get Movie</button>

        </div>
        <div className="movie">
          <div className="posters">
              <img src={movieinfo?.Poster} classname="img-posters"/>
          </div>
          <div className="details">
              <div className="padding">
                    <h1><strong>Title of Movie:</strong>{movieinfo?.Title}</h1>
                    <p><strong>Description :</strong>{movieinfo?.Plot}</p>
                    <p><strong>Movie Actor:</strong>{movieinfo?.Actors}</p>
                    <p><strong>Box Office Collections:</strong>{movieinfo?.BoxOffice}</p>
                    <p><strong>Movie Language:</strong>{movieinfo?.Language}</p>
                    <p><strong>Released Date:</strong>{movieinfo?.Released}</p>
                    <p><strong>Movie Duration:</strong>{movieinfo?.Runtime}</p>


                    <div className="ratings">
                      <div>
                        <strong>{movieinfo?.Ratings[0].Source}</strong>
                        <h3>{movieinfo?.Ratings[0].Value}</h3>
                      </div>
                      
                     
                     
                      
                    </div>
                    
              </div>
          </div>
        </div>
      </div>


    </div>

    </div>
  );
}

export default App;
