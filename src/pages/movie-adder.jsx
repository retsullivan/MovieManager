import React from 'react';
import {Movie} from '../models';
import {MovieRepository} from '../api';
import { Link } from 'react-router-dom';
import './pages.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';


export class MovieAdder extends React.Component {

    movieRepository = new MovieRepository();
    newMovie = new Movie();
  
    state = {movieId:"",
    title:"",
    genre:"",
    director:"",
    releaseYear:"",
    runTime:""};
      
    componentDidMount(){
       
    }

    addMovie(){
        var onSaveComplete = () => {
            this.setState({movieId:"",
                            title:"",
                            genre:"",
                            director:"",
                            releaseYear:"",
                            runTime:""});
            this.props.history.push(`/movies`);
           
        };
        this.movieRepository.addMovie(new Movie(this.state.movieId,this.state.title,this.state.genre,this.state.director,
                                                this.state.releaseYear, this.state.runTime), this.state.movieId)
                            .then(onSaveComplete);
    }

    render(){
        return<>
         
        <div className="maroon"></div>
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>               
        <div className="row movie-details">
            <div className="card movie-card">
                <div className="card-body movie-card">
                    
                    <div className="card">
                        <h3 className="display-4">Add Movie</h3>
                        
                        <form className="movie-form">
                            <div className="form-group">
                                <div className="d-flex">
                                    <input type="text"
                                    id="newMovieId"
                                    name="newMovieId"
                                    className="form-control" 
                                    placeholder= "Enter a the movie id"
                                    value={this.state.movieId}
                                    onChange={e =>this.setState({movieId:e.target.value})}
                                    /> 
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="d-flex"> 
                                    <input type="text"
                                    id="newMovieTitle"
                                    name="newMovieTitle"
                                    className="form-control" 
                                    placeholder="Enter the movie title"
                                    value={this.state.title}
                                    onChange={e =>this.setState({title:e.target.value})}
                                    />    
                                </div>         
                            </div>
                            <div className="form-group">
                                <div className="d-flex"> 
                                    <input type="text"
                                    id="newMovieGenre"
                                    name="newMovieGenre"
                                    className="form-control" 
                                    placeholder="Enter the movie genre"
                                    value={this.state.genre}
                                    onChange={e =>this.setState({genre:e.target.value})}
                                    />    
                                </div>         
                            </div>
                            <div className="form-group">
                                <div className="d-flex"> 
                                    <input type="text"
                                    id="newMovieDirector"
                                    name="newMovieDirector"
                                    className="form-control" 
                                    placeholder="Enter the director"
                                    value={this.state.director}
                                    onChange={e =>this.setState({director:e.target.value})}
                                    />    
                                </div>         
                            </div>
                            <div className="form-group">
                                <div className="d-flex"> 
                                    <input type="text"
                                    id="newMovieReleaseYear"
                                    name="newMovieReleaseYear"
                                    className="form-control" 
                                    placeholder="Enter the release year"
                                    value={this.state.releaseYear}
                                    onChange={e =>this.setState({releaseYear:e.target.value})}
                                    />    
                                </div>         
                            </div>
                            <div className="form-group">
                                <div className="d-flex"> 
                                    <input type="text"
                                    id="newMovieRuntime"
                                    name="newMovieRUntime"
                                    className="form-control" 
                                    placeholder="Enter the runtime"
                                    value={this.state.runTime}
                                    onChange={e =>this.setState({runTime:e.target.value})}
                                    />    
                                </div>         
                            </div>
                    </form>        
                    <button className="btn btn-info btn-block" onClick={e =>this.addMovie()}> Add </button>
                    </div>
                </div>
            </div>
        </div>  
        </>    
    }
}
export default withRouter (MovieAdder);