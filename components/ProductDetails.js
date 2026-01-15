const productDetail = {
    template: `
        <p>{{ product.title }}</p>

        <img :src="product.image" :alt="product.description" height="300">

        <p v-if="product.stars > 0">
            <strong>{{ product.stars }}</strong>
        </p>

        <button 
            @click.prevent="addCart(product)" 
            :disabled="productInCart">
            Adicionar no Carrinho
        </button>
    `,
    props: {
        product: {
            type: Object,
            required: true,
        },
        productInCart: {
            type: Boolean,
            required: true,

        }
    },
    emits: ['add-cart'],
    methods: {
        addCart(product) {
            this.$emit('add-prod-cart', product)
        }
    }
}

app.component('product-detail', productDetail)

