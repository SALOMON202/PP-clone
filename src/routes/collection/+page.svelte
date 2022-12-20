<script>
  import { load } from "recaptcha-v3";
  import Loading from "../../components/loading.svelte";
  import { onMount } from "svelte";
  import Collection from "../../components/splide_components/collection.svelte";
  async function generateToken() {
    const recaptcha = await load("6LcIadYfAAAAABEogXPi4R0-p_NJ6CIEyN0bfoI_");
    let token = await recaptcha.execute("get");
    return token;
  }
  const loadData = async () => {
    let datasToBeSentToCollection = JSON.parse(localStorage.getItem("datas"));
    const url = `https://api-dev.publicpressure.io/main/v1/drop/${datasToBeSentToCollection._id}`;
    const token = await generateToken();
    const response = await fetch(url, {
      headers: {
        "g-recaptcha-response": token,
      },
    });
    let data = await response.json();
    return data;
  };
</script>

{#await loadData()}
  <Loading />
{:then data}
  <div class=" maxW ml-12 mr-12 md:ml-6 md:mr-6 lg:ml-12 lg:mr-12 xl ">
    <Collection {data} />
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
