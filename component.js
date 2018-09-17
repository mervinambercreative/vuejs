var app = new Vue({
	el: '#app',
	data: {
		title: 'Title',
	},
	methods: {
		changeTitle: function(event) {
			this.title = event.target.value;
		}
	}
})

var header = new Vue({
	el: '#header',
	data: {
		link1: 'http://ambercreative.sg',
		link2: 'https://ambercreative.sg/who-we-are-new/',
		link3: 'https://ambercreative.sg/what-we-do/',
		link4: 'https://ambercreative.sg/portfolio/',
		link5: 'https://ambercreative.sg/case-studies/',
		link6: 'https://ambercreative.sg/blog/',
		link7: 'https://ambercreative.sg/contact/',
	}
})

var footer = new Vue({
	el: '#footer',
	data: {
		footer: 'Copyright 2018 Amber Creative Pte Ltd - All Rights Reserved',
	}
})