import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter, Redirect} from 'react-router-dom';
import {MovieDetails} from "./movie-details";
import {MovieRepository} from "../api";
import {Movie} from "../models";
import './pages.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class HomePage extends React.Component {

    movieRepository = new MovieRepository();
    movie =new Movie();

    state={
        movieId:"",
        redirect:false
    };
    
    onSubmit(){
        this.redirect=true;
    }

    isIdValid(id){
        let isValid = false;
        let movie=this.movieRepository.getMovieById(id);
        if(movie.title){
            this.isValid=true;
        }
        return isValid
    }

    render(){
        return <>
            <div className="top">
                <div className="row">
                    <div className="col">
                        <h1 className="display-1">
                            <Link to="/home" className="site-title">Movie Manager</Link>
                        </h1>
                    </div>
                </div>
            </div>
            <div className='search-bar'>
                <div className="row">                
                    
                    <div className="col col-sm-6">
                        <Link to={'/movies'} className="btn btn-info btn-block">Movie List</Link>  
                    </div>
                                        
                    <div className="col col-sm-6">
                        <form className="movie-id-search">
                            <div className="form-group p-0 m-0">
                                {
                                <input type="text"
                                id="movieId"
                                name="movieId"
                                className="form-control" 
                                placeholder="Enter a movie id"
                                value={this.state.movieId}
                                onChange={e =>this.setState({movieId:e.target.value})}
                                />       
                                }            
                            </div>
                            {
                                !this.state.movieId && 
                                <button className="btn btn-outline-info id-search-button">
                                    Submit
                                </button>
                            }
                            {
                                this.state.movieId && 
                                // this.isIdValid(this.state.movieId)&&
                                <Link to={'/movies/'+ this.state.movieId} className="btn btn-outline-info id-search-button">
                                    Submit
                                </Link> 
                            }
                        </form> 
                       
                    </div>   
                </div>  
            </div>   
            
            <div className="image">
                 <img  className="banner" src="https://fsmedia.imgix.net/d2/6c/c5/1d/7991/47e2/b0be/74ccd76d8ad9/star-wars-rise-of-skywalker-leaks-theories-spoilers.jpeg" alt="rise of skywalker logo"/>
            </div>
        
    </>
    }
}
export default withRouter(HomePage);