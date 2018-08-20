var apiTest = new Vue({
    el: '#app',
    data: {
        affiliates: [],
        addUserTemp:{firstName:":"}
    },
    mounted() {
        axios
            .get('/affiliate?key=78942ef2c1c98bf10fca09c808d718fa3734703e')
            .then(response => (this.affiliates = response.data));

        $('.modal').modal();
    }
})