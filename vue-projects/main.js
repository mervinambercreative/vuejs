var app = new Vue({
	el: '#app',
	data: {
		product: 'Socks',
		image: 'https://images.vans.com/is/image/Vans/XRZHTG-HERO?$583x583$',
		cdesc: '3 Socks',
		href: 'http://www.yahoo.com',
		width: '250px',
		height: '250px',
		inventory: 9,
		details: ["80% cotton", "20% polyester", "Gender-neutral"]
	}

	variants:{
		[
			{
				variantId:2234,
				variantColor: "green"
			}
			{
				variantId:2235,
				variantColor: "blue"
			}
		]
	}

	// Event Handling
	cart: 0
})