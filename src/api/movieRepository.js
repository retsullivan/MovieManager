import axios from 'axios';

export class MovieRepository{

    url = "http://localhost:8081/api";
    config = {
        headers:{ }
    };

    getMovieById(id){
        return new Promise((resolve,reject)=>{
            axios.get(`${this.url}/movies/${id}`, this.config)
            .then(x=>resolve(x.data))
            .catch(x=>{
                alert(x);
                reject();
            });            
        });
    }

    getMovies(){
        return new Promise((resolve,reject)=>{
            axios.get(`${this.url}/movies/`, this.config)
                .then(x=>resolve(x.data))
                .catch(x=>{
                    alert(x);
                    reject();
            });
        });
    }

    addMovie(movie,id){
        return new Promise((resolve,reject) =>{
            axios.post(`${this.url}/add`,movie,this.config)
                .then(x=> resolve(x.data))
                .catch(x=>{
                    alert(x);
                    reject();
            });
        });
    }    

    editMovie(id, movie){
        return new Promise((resolve,reject) =>{
            axios.put(`${this.url}/movies/${id}`,movie,this.config)
                .then(x=> resolve(x.data))
                .catch(x=>{
                    alert(x);
                    reject();
                });
        });
    }

    deleteMovie(id){
        return new Promise((resolve,reject) =>{
            axios.delete(`${this.url}/movies/${id}`, this.config)
                .then(x=> resolve(x.data))
                .catch(x=>{
                    alert(x);
                });
        });
    }

}