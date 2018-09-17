<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Amber Creative</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

<link rel="stylesheet" type="text/css" href="http://localhost:8888/vue/template-style.css">

<!--<link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css"/>
<link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css"/>-->

</head>

<body>

<div id="header" class="container-fluid">
	<div class="row">
		<div class="col-12">
			<nav class="navbar navbar-expand-lg navbar-light" id="navbarid">
				<a v-bind:href="link1" class="nav-brand"><img src="https://storage.googleapis.com/ambercreative/2017/11/e3b49fbc-amber_logo2.png"></a>
			  	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
			    <div class="navbar-nav  justify-content-end">
			      <a class="nav-item nav-link" v-bind:href="link2">Who We Are</a>
					<a class="nav-item nav-link" v-bind:href="link3">What We Do</a>
					<a class="nav-item nav-link" v-bind:href="link4">Portfolio</a>
					<a class="nav-item nav-link" v-bind:href="link5">Case Studies</a>
					<a class="nav-item nav-link" v-bind:href="link6">Blog</a>
					<a class="nav-item nav-link" v-bind:href="link7">Contact Us</a>
			    </div>
			  </div>
			</nav>
		</div>
	</div>
</div>