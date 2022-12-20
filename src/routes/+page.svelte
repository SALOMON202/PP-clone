<script>
  import { load } from "recaptcha-v3";
  import Form from "../components/body_components/form.svelte";
  import GetStarted from "../components/body_components/getStarted.svelte";
  import Main from "../components/splide_components/main.svelte";
  import NowLive from "../components/splide_components/nowLive.svelte";
  import Polkadot from "../components/body_components/polkadot.svelte";
  import Banner from "../components/body_components/banner.svelte";
  import Loading from "../components/loading.svelte";
  async function generateToken() {
    const recaptcha = await load("6LcIadYfAAAAABEogXPi4R0-p_NJ6CIEyN0bfoI_");
    let token = await recaptcha.execute("get");
    return token;
  }

  const loadData = async () => {
    const url = "https://api-dev.publicpressure.io/main/v1/section/home";
    const token = await generateToken();
    const response = await fetch(url, {
      headers: {
        "g-recaptcha-response": token,
      },
    });
    let data = await response.json();
    return data;
  };
  let imgSrc;
</script>

{#await loadData()}
  <Loading />
{:then data}
  <div class=" h-8 ml-6 z-50 fixed cursor-pointer top-20 w-44 " />
  <div class="min-w-[550px]">
    <Main dataToPassIntoMain={data[0].content} />
    <div
      class="maxW ml-12 mr-12 md:ml-6 md:mr-6 lg:ml-12 lg:mr-12 2xl:m-auto  "
    >
      {#each data.slice(1) as singleDataToPass}
        {#if singleDataToPass.type == "drop"}
          <Main dataToPassIntoMain={singleDataToPass.content} />
        {:else if singleDataToPass.type == "template"}
          <NowLive singleDataToPass={singleDataToPass.content} />
        {/if}
      {/each}
    </div>
    <div class="maxW ml-12 mr-12 md:ml-6 md:mr-6 lg:ml-12 lg:mr-12 2xl:m-auto ">
      <Banner {imgSrc} />
    </div>
    <div class="maxW ml-12 mr-12 md:ml-6 md:mr-6 lg:ml-12 lg:mr-12 2xl:m-auto ">
      <Polkadot />
    </div>
    <div class="maxW ml-12 mr-12 md:ml-6 md:mr-6 lg:ml-12 lg:mr-12 2xl:m-auto ">
      <GetStarted />
    </div>
    <div class="maxW ml-12 mr-12 md:ml-6 md:mr-6 lg:ml-12 lg:mr-12 2xl:m-auto ">
      <Form />
    </div>
  </div>
{/await}
