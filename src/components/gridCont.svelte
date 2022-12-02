<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let showSingleSong = false;
</script>

<div
  class="grid-elem flex "
  style="    max-width: 1568px;
padding-top: 30px;
justify-content: space-between;"
>
  <img
    on:click={() => {
      dispatch("returnToHome", showSingleSong);
    }}
    src="pp-logo.svg"
    alt="logo"
    class="svelte-1ltn2z cursor-pointer"
    style="filter: invert(1);
    width: 171px;"
  />
  <img src="hamburger-menu.png" class="cursor-pointer" alt="" />
</div>
