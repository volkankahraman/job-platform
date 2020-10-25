<script>
  import { goto } from '@sapper/app'

    export let title;
    export let position;
    export let available = false;
    async function handleSubmit () {
        let id = Math.floor(Math.random()*100);
        let job = {id,title,position,available};
        
        await fetch('jobs.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job),
        })
        goto('/jobs')
    }
</script>
<style>
    h2{
    text-align: center;
  }
  form {
    max-width: 360px;
    margin: 40px auto;
    text-align: center;
  }
  input {
    display: block;
    width: 100%;
    padding: 10px;
    font-family: arial;
    margin: 10px auto;
    border: 1px solid #eee;
    border-radius: 8px;
  }
  button{ 
    width:100%;
    padding: 10px;
    margin: 10px auto;
    
    
  }
</style>
<h2>Add a new Job</h2>
<form on:submit|preventDefault={handleSubmit}>
    <input type="text" bind:value={title} placeholder="job title" required>
    <input type="text" bind:value={position} placeholder="position" required>
    
    <input type="checkbox" bind:checked={available}> Available
    
    <button type="submit" >Save</button>
</form>