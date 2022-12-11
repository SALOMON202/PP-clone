<script>
  import { createEventDispatcher } from "svelte";
  export let src;
  export let title;
  export let by;
  export let minted;
  export let price;
  export let song;
  export let contract;
  export let marginBottom;
  const dispatch = createEventDispatcher();
</script>

<div
  class="flex flex-row justify-center  {marginBottom} cursor-pointer  "
  on:keydown
  on:click={() => {
    dispatch("openSingleSong", [src, title, by, minted, price, song, contract]);
  }}
>
  <!-- ml-6 mr-6 -->
  <div class=" flex flex-col ">
    <button
      ><div
        class="rounded-full bg-surface-input h-9 w-9  ml-3 relative top-56"
      />
      <svg
        class="relative"
        style="top:197px; left:25px"
        width="12"
        height="18"
        viewBox="0 0 12 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 18V0L12 9L0 18Z" fill="white" />
      </svg>
    </button>
    <img {src} alt="" class="w-72" />
    <div class="w-72  bg-surface-input flex flex-col pt-4 ">
      <span class="text-surface-Tbase font-semibold text-sm pl-3 "
        ><nobr> {title}</nobr></span
      >
      <span class="text-surface-Tbase font-normal text-xs pl-3 pt-1 pb-4"
        >{by}</span
      >
      <hr class="opacity-50 ml-3 mr-3 " />
      <div class="flex flex-row justify-between pt-4">
        <span class="text-surface-Tbase text-sm pl-3">2d 7m 30s</span>
        <span class="text-surface-Tbase text-sm"
          >Minted:<span class="text-surface-Tbase pr-3">{minted}</span></span
        >
      </div>
      <div class="flex flex-row justify-between pb-4">
        <span class="text-surface-btnSpec pl-3">Buy Now!</span>
        <span class="text-surface-btnSpec pr-3">{price}</span>
      </div>
    </div>
  </div>
</div>
