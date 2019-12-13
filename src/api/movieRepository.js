import axios from 'axios';

export class MovieRepository{

    url = "http://localhost:8081/api/movies";
    config = {
        headers:{ }
    };

    getMovieById(id){
        return new Promise((resolve,reject)=>{
            axios.get(`${this.url}/${id}`, this.config)
            .then(x=>resolve(x.data))
            .catch(x=>{
                alert(x);
                reject();
            });            
        });
    }

    getMovies(){
        return new Promise((resolve,reject)=>{
            axios.get(`${this.url}`, this.config)
                .then(x=>resolve(x.data))
                .catch(x=>{
                    alert(x);
                    reject();
                });
        });
    }

}