<script>
  import NowLive from "../components/splide_components/nowLive.svelte";
  import Test from "../components/body_components/test.svelte";
  export let singleDataToPass;
  export let primaryMktDatas;
</script>

<div class="mt-44 ">
  <NowLive singleDataToPass={primaryMktDatas} />
</div>

<div class=" pb-32 w-full">
  <span class="text-4xl text-surface-Tbase font-bold ">Marketplace</span>

  <Test {singleDataToPass} />
</div>
