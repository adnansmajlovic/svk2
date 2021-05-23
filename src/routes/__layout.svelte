<script>
	import Header from "$lib/Header/index.svelte";
	import Amplify, { API, Auth, graphqlOperation, Storage } from "aws-amplify";
	import awsconfig from "../aws-exports";
	import { onMount, onDestroy } from "svelte";
	import "../app.css";
	import awsmobile from "../aws-exports";

	onMount(() => {
		let awsmobileMandatorySignIn =
			awsmobile.aws_mandatory_sign_in == "enable" ? true : false;

		Amplify.configure(awsconfig);
		console.log({ Amplify, API, Auth });
	});
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>
		visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
	</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
