<script>
  import Footer from "../components/footer.svelte";
  import Form from "../components/body_components/form.svelte";
  import GetStarted from "../components/body_components/getStarted.svelte";
  import Main from "../components/splide_components/main.svelte";
  import NowLive from "../components/splide_components/nowLive.svelte";
  import Polkadot from "../components/body_components/polkadot.svelte";
  import SingleSong from "../components/singlesong_components/singleSong.svelte";
  import Test from "../components/body_components/test.svelte";
  import Banner from "../components/body_components/banner.svelte";
  import Loading from "../components/loading.svelte";
  // let c;
  // hi.subscribe((data) => {
  //   c = data;
  // });
  // console.log(c);

  let infoToPassToSingleSong;
  let showSingleSong = false;
  const openSingleSong = (e) => {
    infoToPassToSingleSong = e.detail;
    showSingleSong = true;
    console.log(infoToPassToSingleSong);
  };
  export async function load({ context }) {
    infoToPassToSingleSong;
    return {
      context: { infoToPassToSingleSong },
    };
  }

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("si"));
    }, 4000);
  });
</script>

{#await myPromise}
  <Loading />
{:then temp}
  <div
    class=" h-8 ml-6 z-50 fixed cursor-pointer top-20 w-44"
    on:keyup
    on:click={() => {
      showSingleSong = false;
    }}
  />
  <div style="min-width:550px ">
    {#if showSingleSong == false}
      <Main />
      <div class="maxW mx-12 md:mx-6 lg:mx-auto ">
        <NowLive on:openSingleSong={openSingleSong} />
      </div>
      <div class="maxW mx-12 md:mx-6 lg:mx-auto">
        <Banner />
      </div>
      <div class="maxW mx-12 md:mx-6 lg:mx-auto">
        <Test />
      </div>
      <div class="maxW mx-12 md:mx-6 lg:mx-auto">
        <Polkadot />
      </div>
      <div class="maxW mx-12 md:mx-6 lg:mx-auto">
        <GetStarted />
      </div>
      <div class="maxW mx-12 md:mx-6 lg:mx-auto">
        <Form />
      </div>
    {:else}
      <div class="maxW mx-12 md:mx-6 lg:mx-auto">
        <SingleSong {infoToPassToSingleSong} />
      </div>
    {/if}
  </div>
{/await}

<style>
  .maxW {
    max-width: 1400px;
  }
</style>
