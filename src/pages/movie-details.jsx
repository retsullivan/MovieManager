import React from 'react';
import {Movie} from '../models';
import {MovieRepository} from '../api';
import { Link } from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import './pages.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';


export class MovieDetails extends React.Component {

    movieRepository = new MovieRepository();
  
    state = {};

    componentDidMount(){
        let movieId=this.props.match.params.id;
        
        if(movieId){
        this.movieRepository.getMovieById(movieId)
            .then(movie => this.setState({movie:movie}));
        }
    }

    deleteMovie(){
        var onSaveComplete = () => {
            this.setState({});
            this.props.history.push(`/movies`); 
        };
        
        this.movieRepository.deleteMovie(this.state.movie.id)
                            .then(onSaveComplete);
    }

    render(){
        if (!this.state.movie) {
            return <div>Loading....</div>
        }
        return<>
          <div className="top">
            <div className="row">
                <div className="col">
                    <h1 className="display-1">
                        <Link to="/home" className="site-title">Movie Manager</Link>
                    </h1>
                </div>
            </div>
        </div>              
        <div className="row movie-details">
        
            <div className="row card movie-card">
                <div className="card-title">
                    <h3 className="display-3">Movie Details</h3>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Director</th>
                            <th>Year</th>
                            <th>Runtime</th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                            </tr>
                        </thead>
                        {
                        this.state.movie &&  
                        <tbody>
                            <tr>
                                <td>{this.state.movie.id}</td>
                                <td>{this.state.movie.title}</td>
                                <td>{this.state.movie.genre}</td>
                                <td>{this.state.movie.director}</td>
                                <td>{this.state.movie.releaseYear}</td>
                                <td>{this.state.movie.runtime}</td>
                            
                                <td> 
                                    {/* <div className="btn btn-outline-info  detail-button">Edit</div>  */}
                                    <Link to={'/edit/'+this.state.movie.id} className="btn btn-outline-info detail-button">
                                            Edit
                                    </Link>  
                                </td>
                                <td>    
                                    <div className="btn btn-danger detail-button" onClick={() => 
                                        { if (window.confirm('Are you sure you wish to delete this movie?'))
                                         this.deleteMovie()}}>Delete</div>
                                </td>
                            </tr>
                        </tbody>
                        }
                    </table>
                </div>
            </div>
        </div>  
        </>    
    }
}
export default withRouter (MovieDetails);