<script>
  import { Player, Video } from "@vime/svelte";
  import Details from "./details.svelte";
  import Listings from "./listings.svelte";
  export let infoToPassToSingleSong;
  console.log(infoToPassToSingleSong);
</script>

<div class="mt-36 mb-64 mr-6 ml-6" style="height:400px">
  <div
    class="w-full bg-black flex justify-center "
    style="border:1px solid red ;   "
  >
    <div class="videoplay" style="  width:43.75rem">
      <Player controls>
        <Video crossorigin="" poster={infoToPassToSingleSong[0]}>
          <source data-src={infoToPassToSingleSong[5]} />
        </Video>
      </Player>
    </div>
  </div>

  <div class="flex flex-row justify-between mt-3 mr-10 ">
    <span class="text-3xl text-surface-Tbase font-semibold "
      >{infoToPassToSingleSong[1]}</span
    >
    <div class="w-8 h-8 bg-surface-input rounded-sm">
      <button
        ><svg
          width="25"
          viewBox="-35 -35 104 104"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="title"
          aria-describedby="desc"
          role="img"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>Upload</title>
          <desc>A line styled icon from Orion Icon Library.</desc>
          <path
            d="M31 48V3M16 20L31 3l15 16"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke="white"
            fill="none"
            data-name="layer2"
            stroke-linejoin="round"
          />
          <path
            d="M8 46v16h46V46"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke="white"
            fill="none"
            data-name="layer1"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
  <div class="flex flex-col ">
    <span class="flex flex-row "
      ><div
        class="rounded-full h-7 w-7 bg-surface-btnSpec mt-2 text-surface-Tbase font-bold text-center"
      >
        {infoToPassToSingleSong[2][0]}
      </div>
      <div class="flex flex-col mt-1 ml-1">
        <span
          class="text-surface-Tbase text-xs
        ">{[infoToPassToSingleSong[2]]}</span
        >
        <span
          class="text-surface-Tbase text-xs
        "
          style="font-size: 0.6em;
        line-height: 0.75rem;">Artist</span
        >
      </div>
    </span>
    <span class="mt-2 text-surface-Tbase opacity-40 font-semibold text-sm "
      >Collection <span class="text-surface-btnSpec ">ONE</span></span
    >
    <span class="mt-2 text-surface-Tbase opacity-40 font-semibold text-sm "
      >Minted <span class="text-surface-btnSpec ">
        {infoToPassToSingleSong[3]}</span
      ></span
    >
    <span class="mt-2 text-surface-Tbase opacity-40 font-semibold text-sm "
      >starting from <br /><span class="text-3xl">N/A</span></span
    >
  </div>

  <div
    class="h-10 bg-surface-btnSpec mt-10 text-center pt-2 text-surface-Tbase hover:opacity-50"
  >
    ENDED //
  </div>
  <Details />
  <Listings />
</div>
