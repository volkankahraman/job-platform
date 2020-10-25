<script context="module">
    export async function preload(page,session){
        const {id} = page.params;
        
        const res =  await this.fetch(`jobs/${id}.json`);
        console.log(res.status);
        if(res.status == 200){
            const job = await res.json();
            return {job}
        }else{
            const {error} = await res.json();
            this.error(res.status, error);
        }
	}
</script>
<script>
    export let job;
    export let checked = job.available;
    import { onMount } from 'svelte';
    
    onMount(async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
		photos = await res.json();
    });
    
    $: {
        console.log(checked);
        if(typeof fetch  === 'function'){
        fetch(`jobs/${job.id}.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:job.id, available:checked}),
        })
        }
    }
    
</script>
<div><h1>{job.title}</h1>
<h2>{job.position}</h2>
<p>Available <input type="checkbox" bind:checked={checked} ></p></div>
<a href="/jobs">Return to Jobs</a>