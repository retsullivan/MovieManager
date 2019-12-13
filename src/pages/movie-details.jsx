import React from 'react';
import {Movie} from '../models';
import {MovieRepository} from '../api';
import { Link } from 'react-router-dom';
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


    render(){
        if (!this.state.movie) {
            return <div>Loading....</div>
        }
        return<>
          <div className="top">
            <div className="row">
                <div className="col">
                    <h1 className="display-1">
                        <Link to="/home" className="site-title">Movie Finder</Link>
                    </h1>
                </div>
            </div>
        </div>              
        <div className="row">
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
                                {/* <Link to={'/movies/'+ movie.id} className="btn btn-info btn-block">
                                    Product Details 
                            </Link>   */}
                            </td>
                        </tr>
                    </tbody>
                    }
                </table>
            </div>
        </div>  
        </>    
    }
}
export default withRouter (MovieDetails);