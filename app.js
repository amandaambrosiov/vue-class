const app = {
    data() {
        return {
            title: 'Curso Vue',
            name: 'Amanda',
            lastName: 'Ambrosio',
            products: [
                {
                    title: 'Filme 01',
                    description: 'Filme sobre história.',
                    image: 'assets/imgs/filme01.jpg',
                    stars: 3
                },
                {
                    title: 'Filme 02',
                    description: 'Filme sobre história da literatura.',
                    image: 'assets/imgs/filme02.jpg',
                    stars: 0
                }
            ],
            cart: [],
            styles: {
                backgroundColor: '#000',
                color: '#fff',
            },
            themeBlack: true
        }
    },

    computed: {
        fullName() {
            return this.name + ' ' + this.lastName
        }
    },

    methods: {
        addCart(product) {
            this.cart.push(product)
        },

        inCart(product) {
            return this.cart.indexOf(product) != -1
        },

        removeCart(product) {
            this.cart = this.cart.filter((prod, index) => product != prod)
        },
        toggleTheme() {
            this.themeBlack = !this.themeBlack

            if (this.themeBlack) {
                this.styles = {
                    backgroundColor: '#000',
                    color: '#fff',
                }
            } else {
                this.styles = {
                    backgroundColor: '#fff',
                    color: '#000',
                }
            }
        }
    },
}

Vue.createApp(app).mount('#app')