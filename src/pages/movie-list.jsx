import React from 'react';
import {MovieRepository} from "../api";
import {Movie} from "../models";
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './pages.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class MovieList extends React.Component {


    movieRepository = new MovieRepository();
    
    state = {
        movies:[]
    };

    componentDidMount(){ 
        this.movieRepository.getMovies()
            .then(movies => this.setState({movies:movies}));
    }

    
    render(){
        return <>
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
                            <th>Title</th>
                            <th>Year</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    {
                    this.state.movies &&  //makes sure that there are movies
                        this.state.movies.map(movie=>
                    <tbody>
                        <tr>
                            <td>{movie.title}</td>
                            <td>{movie.releaseYear}</td>
                            <td> 
                                <Link to={'/movies/'+ movie.id} className="btn btn-outline-info btn-block">
                                        Details 
                                </Link>  
                            </td>
                        </tr>
                    </tbody>
                    )}
                </table>
            </div>
        </div>
    </>
    }
}
export default withRouter(MovieList);