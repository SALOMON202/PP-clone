<script>
  import SingleSplide from "./singleSplide.svelte";
  export let datasToBeSentToCollection;
</script>

<div class="flex flex-row flex-wrap gap-5 ml-3 ">
  {#each datasToBeSentToCollection.templates as singleSong}
    <SingleSplide {singleSong} />
  {/each}
</div>
