<style>
	h1,  p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}
	img{
		width:200px;
		margin: 0 auto;
		display:block;
	}
	a{
		margin-top: 40px;
	}
	div{
		margin-top: 60px;
		text-align: center;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Job Platform</title>
</svelte:head>

<div>
	<img src="logo-512.png" alt="" srcset="">
	<h1>Jobs!</h1>
<p>Find yor nex job here</p>
<a href="jobs">Find Jobs</a>
</div>