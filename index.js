$(function () {

    const vm = new Vue({
        el: '#app',
        data: {
            loading: false,
            code: null,
            response: null,
            form: {
                first_name: '',
                last_name: ''
            }
        },
        methods: {
            makeRequest() {
                console.log('Making request!')
                this.loading = true

                this.$http.get('https://httpbin.org/get')
                    .then(resp => {
                        this.code = resp.status
                        this.response = resp.body
                        this.loading = false
                    }, resp => {
                        this.code = resp.status
                        this.response = resp.body
                        this.loading = false
                        alert('The request failed!')
                    })
            },
            register() {
                this.loading = true

                this.$http.post('https://httpbin.org/post', this.form)
                    .then(resp => {
                        this.code = resp.status
                        this.response = resp.body
                        this.loading = false
                    })
            }
        }
    })

})