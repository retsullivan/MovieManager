import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './pages.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class HomePage extends React.Component {

    state={};
    
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
            <div className='search-bar'>
                <div className="row">                
                    {/* <div className="btn btn-default btn-block" >
                        Get All Movies
                    </div>   */}
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
                                onChange={e =>this.setState({userName:e.target.value})}
                                />       
                                }            
                            </div>
                            <button className="btn btn-outline-info id-search-button" 
                            onClick={(e => this.onSubmit())}>
                                Submit
                            </button>
                        </form> 
                       
                    </div>   
                </div>  
            </div>   
            
            <div className="image">
                    {/* <img className="banner" src='https://preview.redd.it/2ro7vd6cddx01.png' alt="rise of skywalker logo"/> */}
                    <img  className="banner" src="https://fsmedia.imgix.net/d2/6c/c5/1d/7991/47e2/b0be/74ccd76d8ad9/star-wars-rise-of-skywalker-leaks-theories-spoilers.jpeg" alt="rise of skywalker logo"/>
            </div>
        
    </>
    }
}
export default withRouter(HomePage);