<script>
  import { load } from "recaptcha-v3";
  import Loading from "../../components/loading.svelte";
  import Marketplace from "../../components/marketplace.svelte";
  async function generatePrimMktToken() {
    const recaptcha = await load("6LcIadYfAAAAABEogXPi4R0-p_NJ6CIEyN0bfoI_");
    let token = await recaptcha.execute("post");
    return token;
  }
  async function generateSecMktToken() {
    const recaptcha = await load("6LcIadYfAAAAABEogXPi4R0-p_NJ6CIEyN0bfoI_");
    let token = await recaptcha.execute("post");
    return token;
  }
  const loadSecondaryMktData = async () => {
    const url = "https://api-dev.publicpressure.io/main/v1/marketplace/nft";
    const token = await generatePrimMktToken();
    const response = await fetch(url, {
      headers: {
        "g-recaptcha-response": token,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        mediaType: ["music", "video", "collectible"],
        order: {
          field: "startDate",
          direction: "desc",
        },
        market: "secondary",
      }),
    });

    let data = await response.json();
    await loadPrimaryMktData();
    return data;
  };
  const loadPrimaryMktData = async () => {
    const url = "https://api-dev.publicpressure.io/main/v1/marketplace/nft";
    const token = await generateSecMktToken();
    const response = await fetch(url, {
      headers: {
        "g-recaptcha-response": token,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        mediaType: ["music", "video", "collectible"],
        order: {
          field: "startDate",
          direction: "desc",
        },
        market: "primary",
      }),
    });
    primaryMktDatas = await response.json();
    console.log(primaryMktDatas);
    return primaryMktDatas;
  };
  let primaryMktDatas;
</script>

{#await loadSecondaryMktData()}
  <Loading />
{:then data}
  <div class="maxW ml-8 mr-8 md:ml-6 md:mr-6 lg:ml-12 lg:mr-12 xl  ">
    <Marketplace singleDataToPass={data} {primaryMktDatas} />
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
