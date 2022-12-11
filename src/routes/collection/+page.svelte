<script>
  import Loading from "../../components/loading.svelte";
  import { onMount } from "svelte";
  import Collection from "../../components/splide_components/collection.svelte";

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
  <div class=" ml-6 mr-6 lg:ml-12 lg:mr-12">
    <Collection />
  </div>
{/await}
