<script>
  import "@splidejs/svelte-splide/css";
  import SingleSplide from "../splide_components/singleSplide.svelte";
  export let singleDataToPass;
</script>

<div class=" min-w-100%  mb-2">
  <div class="flex flex-wrap w-full">
    {#each singleDataToPass as singleProject}
      <div class="m-auto ">
        <SingleSplide singleSong={singleProject} />
      </div>
    {/each}
  </div>
</div>
