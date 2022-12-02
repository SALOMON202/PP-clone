<script>
  import Footer from "../components/footer.svelte";
  import Form from "../components/form.svelte";
  import GetStarted from "../components/getStarted.svelte";
  import Main from "../components/main.svelte";
  import Navbar from "../components/navbar.svelte";
  import NowLive from "../components/nowLive.svelte";
  import Polkadot from "../components/polkadot.svelte";
  import SingleSong from "../components/singleSong.svelte";
  import Test from "../components/test.svelte";
  let infoToPassToSingleSong;
  let showSingleSong = false;
  const openSingleSong = (e) => {
    infoToPassToSingleSong = e.detail;
    showSingleSong = true;
    console.log(infoToPassToSingleSong);
  };
</script>

<div>
  <Navbar
    on:returnToHome={(e) => {
      showSingleSong = e.detail;
    }}
  />

  {#if showSingleSong == false}
    <Main />
    <NowLive on:openSingleSong={openSingleSong} />
    <Test />
    <Polkadot />
    <GetStarted />
    <Form />
  {:else}
    <SingleSong {infoToPassToSingleSong} />
  {/if}
  <Footer />
</div>
