<script>
  import { createEventDispatcher } from "svelte";
  export let openBigMenu = false;
  const dispatch = createEventDispatcher();
  let changeImg = false;
</script>

<a href="/">
  <div class="grid-elem flex lg: ml-6 mr-6 pt-7 justify-between max-w-[1068px]">
    <img src="pp-logo.svg" alt="logo" class=" cursor-pointer w-44 invert" />
    <div
      on:mouseup={() => {
        changeImg = true;
        dispatch("openBigMenu", (openBigMenu = true));
      }}
    >
      {#if openBigMenu == true}
        <img
          src="delete-sign.png"
          class="cursor-pointer w-8 h-8 invert"
          alt=""
        />
      {:else if openBigMenu == false}
        <img src="hamburger-menu.png" class="cursor-pointer" alt="" />
      {/if}
    </div>
  </div></a
>
