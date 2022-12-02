<script>
  import Footer from "../components/footer.svelte";
  import Form from "../components/form.svelte";
  import GetStarted from "../components/getStarted.svelte";
  import Main from "../components/main.svelte";
  import Navbar from "../components/navbar.svelte";
  import NowLive from "../components/nowLive.svelte";
  import Polkadot from "../components/polkadot.svelte";
  import Test from "../components/test.svelte";

  const openSingleSong = (e) => {
    console.log(e.detail);
  };
</script>

<div>
  <Navbar />

  <Main />
  <NowLive on:openSingleSong={openSingleSong} />
  <Test />
  <Polkadot />
  <GetStarted />
  <Form />
  <Footer />
</div>
