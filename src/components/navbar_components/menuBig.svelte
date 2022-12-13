<script>
  import { createEventDispatcher } from "svelte";
  export let openBigMenu;
  const dispatch = createEventDispatcher();
</script>

<nav
  class="fixed inset-x-0 top-0 left-0 bg-surface-primary z-40 inline w-full -translate-y-full h-72"
  class:open={openBigMenu}
>
  <div class="ml-6 mr-6 mt-6 flex flex-row justify-between">
    <a href="/">
      <img
        src="pp-logo.svg"
        alt="logo"
        class="cursor-pointer invert w-44 z-50"
      />
    </a>
    <img
      on:mouseup={() => {
        openBigMenu = false;
        dispatch("reduceMenu", openBigMenu);
      }}
      src="delete-sign.png"
      class="cursor-pointer invert w-8 h-8"
      alt=""
    />
  </div>
  <div class="ml-6 text-surface-Tbase mt-6 text-xl flex ">
    <ul>
      <li class="mb-2 " href>
        <a href="/marketplace">Marketplace</a>
      </li>

      <a href="/"> <li class="mb-2"><a href="//">For artists</a></li></a>
      <a href="/"> <li class="mb-2"><a href="//">How it works</a></li></a>
    </ul>
  </div>
  <div class="flex flex-row justify-evenly mt-6 max-w-full">
    <a href="/login" style="width:45%"
      ><button class="bg-surface-Tbase h-14 rounded-sm font-bold w-full  "
        >Login</button
      ></a
    >
    <a href="/signup" style="width:45%">
      <button
        class="bg-surface-btnSpec h-14 rounded-sm font-bold text-surface-Tbase  w-full"
        >Sign up</button
      ></a
    >
  </div>
</nav>

<style>
  .open {
    transform: translateY(0);
    transition: 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
</style>
