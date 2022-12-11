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
  <Marketplace />
{/await}
