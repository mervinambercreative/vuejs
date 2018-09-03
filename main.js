var app = new Vue({
	el: '#app',
	data: {
		product: 'Socks',
		brandName: 'Burlington',
		image: 'socks-red.jpg',
		cdesc: '3 Socks',
		href: 'http://www.yahoo.com',
		width: '250px',
		height: '250px',
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants: [
			{
				variantId: 2234,
				vColor: "Red",
				vImage: 'socks-red.jpg'
			},
			{
				variantId: 2235,
				vColor: "Blue",
				vImage: 'socks-blue.jpg'
			}
		],
		inventory: 9,
		cart: 0
	},

	methods: {
		addToCartPlus: function() {
			this.cart += 1
		},
		addToCartMinus: function() {
			this.cart -= 1
		},
		updateProduct: function(vImage){
			this.image = vImage
		}
	},


})