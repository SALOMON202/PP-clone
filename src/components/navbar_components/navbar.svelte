<script>
  import { createEventDispatcher, onMount } from "svelte";
  import GridCont from "./gridCont.svelte";
  import Intro from "./intro.svelte";
  import GridContBigger from "./gridContBigger.svelte";
  export let openBigMenu;
  function changeNavbar() {
    windowWidth = window.innerWidth;
    if (windowWidth > 976) {
      changeGridCont = true;
    } else {
      changeGridCont = false;
    }
  }
  const dispatch = createEventDispatcher();
  const returnToHome = (e) => {
    dispatch("returnToHome", e.detail);
  };
  const openMenuBig = (e) => {
    setTimeout(() => {
      openBigMenu = e.detail;
      dispatch("openBigMenu", openBigMenu);
    }, 200);
  };
  let windowWidth;
  let changeGridCont;

  onMount(changeNavbar);
</script>

<svelte:window on:resize={changeNavbar} />
<nav
  class="fixed inset-x-0 top-0 left-0 bg-surface-primary h-32 flex flex-col z-10"
>
  <div class="ml-6 mr-6">
    <Intro />

    {#if changeGridCont == true}
      <GridContBigger
        {openBigMenu}
        on:returnToHome={returnToHome}
        on:openBigMenu={openMenuBig}
      />
    {:else}
      <GridCont
        {openBigMenu}
        on:returnToHome={returnToHome}
        on:openBigMenu={openMenuBig}
      />
    {/if}
  </div>
</nav>
