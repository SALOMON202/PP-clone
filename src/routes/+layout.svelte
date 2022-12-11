<script>
  import "../app.css";
  import Footer from "../components/footer.svelte";
  import MenuBig from "../components/navbar_components/menuBig.svelte";
  import Navbar from "../components/navbar_components/navbar.svelte";

  const reduceMenu = (e) => {
    openBigMenu = e.detail;
    console.log(openBigMenu);
  };
  let showSingleSong;
  let openBigMenu;
</script>

<Navbar
  on:returnToHome={(e) => {
    showSingleSong = e.detail;
  }}
  on:openBigMenu={(e) => {
    openBigMenu = e.detail;
    console.log(openBigMenu);
  }}
  {openBigMenu}
/>

<MenuBig {openBigMenu} on:reduceMenu={reduceMenu} />

<slot />

<Footer />
