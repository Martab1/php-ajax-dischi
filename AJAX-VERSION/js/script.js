console.log("ok");

const app = new Vue({
    el: '#app',
    data: {
        albumInfo: [],

    },
    created(){
        // console.log(window);
        // get data
        const ApiURL = 'http://localhost:8888/php-ajax-dischi/AJAX-VERSION/scripts/database.php';
        axios.get(ApiURL)
             .then( result =>{
                 console.log(result.data);
                 this.albumInfo = result.data;

             })
             .catch( error => {
                 console.log("errore ", error);
             })


    }
});