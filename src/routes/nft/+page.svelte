<script>
  import { load } from "recaptcha-v3";
  import SingleSong from "../../components/singlesong_components/singleSong.svelte";
  import Loading from "../../components/loading.svelte";
  import SingleCollectible from "../../components/singlesong_components/singleCollectible.svelte";
  async function generateToken() {
    const recaptcha = await load("6LcIadYfAAAAABEogXPi4R0-p_NJ6CIEyN0bfoI_");
    let token = await recaptcha.execute("get");
    return token;
  }

  const loadData = async () => {
    const contract = localStorage.getItem("nftToOpen");
    const url = `https://api-dev.publicpressure.io/main/v1/template/${contract}`;
    const token = await generateToken();
    const response = await fetch(url, {
      headers: {
        "g-recaptcha-response": token,
      },
    });
    const data = await response.json();
    return data;
  };
</script>

{#await loadData()}
  <Loading />
{:then data}
  {#if data.mediaType == "music"}
    <div class="maxW ml-8 mr-8 md:ml-6 md:mr-6 lg:ml-12 lg:mr-12 xl  ">
      <SingleSong {data} />
    </div>
  {:else if data.mediaType == "collectible"}
    <div class="maxW ml-8 mr-8 md:ml-6 md:mr-6 lg:ml-12 lg:mr-12 xl  ">
      <SingleCollectible {data} />
    </div>
  {/if}
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
