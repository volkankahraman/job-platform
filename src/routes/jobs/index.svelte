<script context="module">
	export async function preload(page,session){
		const res = await this.fetch('jobs.json');
		const jobs = await res.json();
		return {jobs}
	}
</script>
<script>
	export let jobs;
	function apply(job){
		alert('you apply to ' + job.title)
	}
</script>
<style>

</style>

<svelte:head>
	<title>Recent jobs</title>
</svelte:head>

<h1>Recent jobs</h1>

<ul>
	{#each jobs as job}
	<li><a rel=prefetch href={`jobs/${job.id}`}>{job.title} - {job.position} - </a> {#if job.available}✅ available: <button on:click="{()=>apply(job)}">apply</button> {:else} ❌ not available at the moment {/if} </li>
	{/each}
</ul>

<a href="/jobs/create">Create new job</a>