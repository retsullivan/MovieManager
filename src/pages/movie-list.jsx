import React from 'react';
import { MovieRepository } from "../api";
import { Movie } from "../models";
import { InfoForm } from "../resources";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './pages.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class MovieList extends React.Component {

    movieRepository = new MovieRepository();
      

    state = {
        movies:[{Movie}],
        movieId:"new",
        showEditForm:false,
        editFormClass:""
    };

    componentDidMount(){ 
        this.movieRepository.getMovies()
            .then(movies => this.setState({movies:movies}));
    };

    render(){
        return <>
     
        <div className="maroon"></div>
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>  
        <div className="row">
                <div className="card-body">
                    <table className="table">
                        <thead className="list-table">
                            <tr>
                                <th>Title</th>
                                <th>Year</th>
                                <th>
                                    <Link to={'/new'} className="btn btn-info btn-block">
                                            Add Movie
                                    </Link>  
                                </th>
                            </tr>
                        </thead>
                        <tbody>                   
                            {
                                this.state.movies &&  //makes sure that there are movies
                                this.state.movies.map(movie=>
                                <tr key={movie.movieId}>
                                    <td>{movie.title}</td>
                                    <td>{movie.releaseYear}</td>
                                    <td> 
                                        <Link to={'/movies/'+ movie.id} className="btn btn-outline-info btn-block">
                                                Manage 
                                        </Link>  
                                    </td>
                                </tr>
                        
                            )}
                        </tbody>
                    </table>
                </div>
        </div>
    </>
    }
}
export default withRouter(MovieList);