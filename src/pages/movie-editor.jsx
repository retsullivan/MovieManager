import React from 'react';
import {Movie} from '../models';
import {MovieRepository} from '../api';
import { Link } from 'react-router-dom';
import './pages.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';


export class MovieEditor extends React.Component {

    movieRepository = new MovieRepository();
    state = {};
      
    componentDidMount(){
        let movieId=this.props.match.params.id;
        
        if(movieId){
        this.movieRepository.getMovieById(movieId)
            .then(movie => this.setState({movie:movie}));
        }
    }

    editMovie(){
        var onSaveComplete = () => {
            this.setState({});
            this.props.history.push(`/movies/${this.state.movie.id}`); 
        };
        this.movieRepository.editMovie(this.state.movie.id, this.state.movie)
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
                        <h3 className="display-4">Edit Movie</h3>
                        {
                        this.state.movie &&    
                        <form className="movie-form">
                            <div className="form-group">
                                <div className="d-flex">
                                    <input type="text"
                                    id="newMovieId"
                                    name="newMovieId"
                                    className="form-control" 
                                    placeholder= "movie id"
                                    value={this.state.movie.id}
                                    onChange={e =>this.setState({movie:{...this.state.movie, id: e.target.value}})}
                                    /> 
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="d-flex"> 
                                    <input type="text"
                                    id="newMovieTitle"
                                    name="newMovieTitle"
                                    className="form-control" 
                                    placeholder="title"
                                    value={this.state.movie.title}
                                    onChange={e =>this.setState({movie:{...this.state.movie, title: e.target.value}})}
                                    />    
                                </div>         
                            </div>
                            <div className="form-group">
                                <div className="d-flex"> 
                                    <input type="text"
                                    id="newMovieGenre"
                                    name="newMovieGenre"
                                    className="form-control" 
                                    placeholder= "genre"
                                    value={this.state.movie.genre}
                                    onChange={e =>this.setState({movie:{...this.state.movie, genre:e.target.value}})}
                                    />    
                                </div>         
                            </div>
                            <div className="form-group">
                                <div className="d-flex"> 
                                    <input type="text"
                                    id="newMovieDirector"
                                    name="newMovieDirector"
                                    className="form-control" 
                                    placeholder= "director"
                                    value={this.state.movie.director}
                                    onChange={e =>this.setState({movie:{...this.state.movie,director:e.target.value}})}
                                    />    
                                </div>         
                            </div>
                            <div className="form-group">
                                <div className="d-flex"> 
                                    <input type="text"
                                    id="newMovieReleaseYear"
                                    name="newMovieReleaseYear"
                                    className="form-control" 
                                    placeholder= "release year"
                                    value={this.state.movie.releaseYear}
                                    onChange={e =>this.setState({movie:{...this.state.movie, releaseYear:e.target.value}})}
                                    />    
                                </div>         
                            </div>
                            <div className="form-group">
                                <div className="d-flex"> 
                                    <input type="text"
                                    id="newMovieRuntime"
                                    name="newMovieRUntime"
                                    className="form-control" 
                                    placeholder= "runtime"
                                    value={this.state.movie.runtime}
                                    onChange={e =>this.setState({movie:{...this.state.movie, runtime:e.target.value}})}
                                    />    
                                </div>         
                            </div>
                    </form>      
                    }
                    <button className="btn btn-info btn-block" onClick={e =>this.editMovie()}> Save Changes </button>
                    </div>
                        
                </div>
            </div>
        </div>  
        </>    
    }
}
export default withRouter (MovieEditor);