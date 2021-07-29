<script>
	let firstName = 'Engine';
	let lastName = 'Curators';
	let number = firstName.length;
	$: fullName = `${firstName} ${lastName}`;
	let galaxy = 'nebulon33'
	let images = ["//unsplash.it/70/70", "//unsplash.it/71/70", "//unsplash.it/72/70", "//unsplash.it/73/70", "//unsplash.it/74/70"];
</script>
<main>
<!-- 	<img src="//unsplash.it/300/300"> -->
	<article>
		<h1>{fullName}</h1>
		<input type="text">
	</article>
	<article class="new-grid" >
		{#each images as image}
		<div class="img-box">
			<img src="{image}" alt="random unsplash pictures">
		</div>
		{/each}
	</article>
</main>
<style>
	main {
		background: lightblue;
		width: 100%;
		height: 98vh;
		text-align: center;
		padding-top: 0;
		background-image: url('//unsplash.it/504/383');
		background-size: cover;
		background-position: center;
		position: relative;
}
	input {
		height: 100%;
    border-radius: calc(0.5 * 44px);
    outline: none;
    padding-left: 44px;
    padding-right: 52px;
    position: relative;
    width: 40%;
	}
	article {
    margin: 0 auto;
    position: relative;
		background: rgba(0,0,0,0.1);
		padding: 1em 0;
	}
	article h1 {
		font-size: 32px;
		color: #fff;
	}
	.img-box {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20%;
		margin: 0 auto;
	}
	.new-grid {
		display: flex;
		justify-content: space-evenly;
	}
	.img-box img {
		border-radius: 50%;
	}
	@media(max-width: 1199px) {
				input {
			width: 80%;
		}
	}

	
</style>
