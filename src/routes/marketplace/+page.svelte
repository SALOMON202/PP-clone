<script>
  import { onMount } from "svelte";
  import Loading from "../../components/loading.svelte";
  import Marketplace from "../../components/marketplace.svelte";

  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("ciao"));
    }, 4000);
  });

  onMount(myPromise);
</script>

{#await myPromise}
  <Loading />
{:then temp}
  <div class="maxW ml-12 mr-12 md:ml-6 md:mr-6 lg:ml-12 lg:mr-12 xl  ">
    <Marketplace />
  </div>
{/await}

<style>
  .maxW {
    max-width: 1400px;
  }
  @media screen and (min-width: 1500px) {
    .xl {
      margin: auto;
    }
  }
</style>
