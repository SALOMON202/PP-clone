<script>
  import { Player, Video } from "@vime/svelte";
  import Listings from "./listings.svelte";
  import { onMount } from "svelte";
  import {} from "@vime/svelte";
  import SingleSongDetails from "./singleSongDetails.svelte";
  export let infoToPassToSingleSong;
  let _BIGSCREEN_ = 1024;
  let horiFlexDir;
  let vertiFlexDir;
  let aspect;

  function switchFlexDir() {
    if (window.innerWidth > _BIGSCREEN_) {
      aspect = "1:1";
      horiFlexDir = true;
      vertiFlexDir = false;
    } else if (window.innerWidth < _BIGSCREEN_) {
      aspect = "16:9";
      horiFlexDir = false;
      vertiFlexDir = true;
    }
  }
  let switchBetweenListAndDetail = false;
  const activateListings = (e) => {
    switchBetweenListAndDetail = false;
  };
  const activateDetails = (e) => {
    switchBetweenListAndDetail = true;
  };
  onMount(switchFlexDir);
</script>

<svelte:window on:resize={switchFlexDir} />

<div
  class="mt-36 mr-6 ml-6 flex  flex-col lg:flex-row query "
  style=" min-width:600px ; margin-bottom:350px"
>
  <div class=" flex justify-center query">
    <div class="videoplay" style="min-width:465px">
      <Player controls aspectRatio={aspect}>
        <Video crossorigin="" poster={infoToPassToSingleSong[0]}>
          <source data-src={infoToPassToSingleSong[5]} />
        </Video>
      </Player>
    </div>
  </div>

  <div class="">
    <div class="flex flex-row justify-between mt-3 mr-10 lg:w-96 ml-10 ">
      <span class="text-3xl text-surface-Tbase font-semibold "
        >{infoToPassToSingleSong[1]}</span
      >
      <div class="w-8 h-8 bg-surface-input rounded-sm ">
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
          class="rounded-full h-7 w-7 bg-surface-btnSpec mt-2 text-surface-Tbase font-bold text-center lg:ml-10"
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
      <span
        class="mt-2 text-surface-Tbase opacity-40 font-semibold text-sm lg:ml-10"
        >Collection <span class="text-surface-btnSpec ">ONE</span></span
      >
      <span
        class="mt-2 text-surface-Tbase opacity-40 font-semibold text-sm lg:ml-10"
        >Minted <span class="text-surface-btnSpec ">
          {infoToPassToSingleSong[3]}</span
        ></span
      >
      <span
        class=" text-surface-Tbase opacity-40 font-semibold text-sm lg:ml-10 mt-2 lg:mt-20"
        >starting from <br /><span class="text-3xl">N/A</span></span
      >
    </div>

    <div
      class="h-10 bg-surface-btnSpec mt-10 text-center pt-2 text-surface-Tbase hover:opacity-50 lg: ml-10 relative top-28 mt-0"
    >
      ENDED //
    </div>
  </div>
  {#if vertiFlexDir == true}
    <div class=" flex flex-row mt-10 justify-evenly ">
      <button on:click={activateDetails} style="width:50%">
        <div class="flex flex-col ">
          <span
            class="text-surface-Tbase  text-center font-semibold mb-2  text-xl"
            class:opacity={!switchBetweenListAndDetail}>Details</span
          >
          <hr
            style=" ;position:relative; left:135px ; width:100%"
            class:moveBig={switchBetweenListAndDetail}
            class:movebackBig={!switchBetweenListAndDetail}
          />
        </div>
      </button>
      <button on:click={activateListings} style="width:50%">
        <div class="flex flex-col w-full ">
          <span
            class="text-surface-Tbase  text-center font-semibold mb-2 text-xl"
            class:opacity={switchBetweenListAndDetail}>Listings</span
          >
        </div>
      </button>
    </div>

    {#if switchBetweenListAndDetail == false}
      <Listings />
    {:else}
      <SingleSongDetails {infoToPassToSingleSong} />
    {/if}
  {/if}
</div>

{#if horiFlexDir == true}
  <div class=" flex flex-row gap-10 ">
    <button on:click={activateDetails}>
      <div class="flex flex-col ml-4 mr-4 w-28">
        <span
          class="text-surface-Tbase  text-center font-semibold mb-2 text-lg"
          class:opacity={!switchBetweenListAndDetail}>Details</span
        >
        <hr
          style=" ;position:relative; left:135px ; width:100%"
          class:move={switchBetweenListAndDetail}
          class:moveback={!switchBetweenListAndDetail}
        />
      </div>
    </button>
    <button on:click={activateListings}>
      <div class="flex flex-col w-28">
        <span
          class="text-surface-Tbase  text-center font-semibold mb-2 text-lg"
          class:opacity={switchBetweenListAndDetail}>Listings</span
        >
      </div>
    </button>
  </div>
  <hr />

  {#if switchBetweenListAndDetail == false}
    <Listings />
  {:else}
    <SingleSongDetails {infoToPassToSingleSong} />
  {/if}
{/if}

<!-- <div class=" flex flex-row gap-10">
  <button on:click={activateDetails}>
    <div class="flex flex-col ml-4 mr-4 w-28">
      <span
        class="text-surface-Tbase  text-center font-semibold mb-2 text-lg"
        class:opacity={!switchBetweenListAndDetail}>Details</span
      >
      <hr
        style=" ;position:relative; left:135px ; width:100%"
        class:move={switchBetweenListAndDetail}
        class:moveback={!switchBetweenListAndDetail}
      />
    </div>
  </button>
  <button on:click={activateListings}>
    <div class="flex flex-col w-28">
      <span
        class="text-surface-Tbase  text-center font-semibold mb-2 text-lg"
        class:opacity={switchBetweenListAndDetail}>Listings</span
      >
    </div>
  </button>
</div>
<hr />

{#if switchBetweenListAndDetail == false}
  <Listings />
{:else}
  <SingleSongDetails {infoToPassToSingleSong} />
{/if} -->

<!-- <Details />
  <Listings /> -->
<style>
  @media screen and (min-width: 1024px) {
    .query {
      width: 465px;
    }
  }
  .border {
    border: 1px solid red;
  }
  .opacity {
    opacity: 50%;
  }
  .move {
    transform: translateX(-135px);
    transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
  .moveback {
    transform: translateX(35px);
    transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
  .moveBig {
    transform: translateX(-135px);
    transition: all 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
  .movebackBig {
    transform: translateX(135px);
    transition: all 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
</style>
