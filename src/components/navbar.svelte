<script>
  import GridCont from "./gridCont.svelte";
  import Intro from "./intro.svelte";
</script>

<nav class="fixed inset-x-0 top-0 left-0 bg-surface-primary h-32 inline z-10">
  <div class="ml-6 mr-6">
    <Intro />
    <GridCont />
  </div>
</nav>

<style>
  .inline {
    display: flex;
    flex-direction: column;
  }
</style>
