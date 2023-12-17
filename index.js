new Vue({
    el: '#app',
    data: {
        products: [
            { id: 1, name: 'Produit 1', description: 'Description du produit 1', price: 20, image: 'product1.jpg' },
            { id: 2, name: 'Produit 2', description: 'Description du produit 2', price: 30, image: 'product2.jpg' },
            { id: 3, name: 'Produit 3', description: 'Description du produit 3', price: 25, image: 'product3.jpg' },
        ],
        cart: [],
    },
    computed: {
        cartTotal() {
            return this.cart.reduce((total, item) => total + item.price, 0);
        },
    },
    methods: {
        addToCart(product) {
            this.cart.push({ id: product.id, name: product.name, price: product.price });
        },
    },
});