<script>
  import { Player, Video } from "@vime/svelte";
  import Listings from "./listings.svelte";
  import { onMount } from "svelte";
  import SingleSongDetails from "./singleSongDetails.svelte";
  import dayjs from "dayjs";
  // export let infoToPassToSingleSong;
  export let data;
  const date = JSON.stringify(new Date());

  let _BIGSCREEN_ = 1024;
  let horiFlexDir;
  let vertiFlexDir;

  function switchFlexDir() {
    if (window.innerWidth > _BIGSCREEN_) {
      horiFlexDir = true;
      vertiFlexDir = false;
    } else if (window.innerWidth < _BIGSCREEN_) {
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
  onMount(() => {
    switchFlexDir();
    console.log(data);
  });
</script>

<svelte:window on:resize={switchFlexDir} />

<div
  class="mt-36 flex  flex-col lg:flex-row query justify-between mb-12"
  style=" min-width:500px ; width:100%"
>
  <div
    class=" flex justify-center query vid bg-no-repeat 
     bg-cover bg-center mr-6 "
    style=" background-image: url({data.coverImage}); height:400px; width:100%"
  >
    <!-- <div class="videoplay " style="min-width:100% ">
      <Player controls aspectRatio={aspect}>
        <Video crossorigin="" poster={data.coverImage}>
          <source data-src={data.mediaLink} />
        </Video>
      </Player>
    </div> -->
  </div>

  <div class=" ">
    <div
      class="flex flex-row justify-between mt-3 mb-12 mr-10 lg:w-96 lg:mt-2 "
      style="min-width:500px"
    >
      <span class="text-5xl text-surface-Tbase font-bold tracking-wide">
        {data.title}
      </span>
      <div class="w-12 h-12 bg-surface-input rounded-sm ">
        <button
          ><svg
            width="40"
            style="position:relative ; bottom:3px"
            viewBox="-27 -30 100 100"
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
      <span class="flex flex-row ">
        <div class="flex flex-col mt-1 ml-1">
          <span>
            <span
              class="mt-2 text-surface-Tbase opacity-40 font-semibold text-sm "
              >Collection
            </span>
            <span class="text-surface-btnSpec  ">{data.series.title}</span>
          </span>

          <span>
            <span
              class="mt-2 text-surface-Tbase opacity-40 font-semibold text-sm "
              >Minted
            </span><span class="text-surface-btnSpec ">
              {data.edition}
            </span>
          </span>

          {#if data.endDate > date}
            <span class=" mt-2 lg:mt-24">
              <span
                class=" text-surface-Tbase opacity-40 font-semibold text-sm "
                >Fixed price
              </span><br /><span class="text-3xl font-bold text-white"
                >{data.usdPrice}.00 USD</span
              >
            </span>
          {:else if data.endDate < date}
            <span class="lg:ml-10 mt-2 lg:mt-24">
              <span
                class=" text-surface-Tbase opacity-40 font-semibold text-sm "
                >Starting from</span
              > <br /><span class="text-3xl font-bold text-white ">N/A</span
              ></span
            >
          {/if}
        </div>
      </span>
    </div>

    {#if data.endDate < date}
      <div
        class="h-14 bg-surface-btnSpec text-center  text-surface-Tbase hover:opacity-50 relative top-8 mb-5 ml-0  lg:pt-4"
      >
        ENDED //
      </div>
    {:else if data.endDate > date}
      <div
        class="h-14 bg-surface-btnSpec text-center  text-surface-Tbase hover:opacity-50 relative top-8 mb-5 ml-0 pt-4 "
      >
        Buy NOW !
      </div>
    {/if}
  </div>

  {#if vertiFlexDir == true}
    <div class=" flex flex-row mt-10  justify-evenly ">
      <button on:click={activateDetails} style="width:50%">
        <div class="flex flex-col ">
          <span
            class="text-surface-Tbase  text-center font-semibold mb-2  text-xl"
            class:opacity={!switchBetweenListAndDetail}>Details</span
          >
          <hr
            class="relative w-full "
            style="left:63% "
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
      <SingleSongDetails {data} />
    {/if}
  {/if}
</div>

{#if horiFlexDir == true}
  <div class=" flex flex-row gap-10 ">
    <button on:click={activateDetails}>
      <div class="flex flex-col  w-40">
        <span
          class="text-surface-Tbase  text-center font-semibold mb-2 text-2xl"
          class:opacity={!switchBetweenListAndDetail}>Details</span
        >
        <hr
          class="relative w-full"
          style="left:135px"
          class:move={switchBetweenListAndDetail}
          class:moveback={!switchBetweenListAndDetail}
        />
      </div>
    </button>
    <button on:click={activateListings}>
      <div class="flex flex-col w-40 pr-14">
        <span
          class="text-surface-Tbase  text-center  font-semibold mb-2 text-2xl"
          class:opacity={switchBetweenListAndDetail}>Listings</span
        >
      </div>
    </button>
  </div>
  <hr />

  {#if switchBetweenListAndDetail == false}
    <Listings />
  {:else}
    <SingleSongDetails {data} />
  {/if}
{/if}

<style>
  @media screen and (min-width: 1024px) {
    .query {
      width: 465px;
    }
    .vid {
      min-width: 465px;
    }
  }

  .opacity {
    opacity: 50%;
  }
  .move {
    transform: translateX(-63%);
    transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
  .moveback {
    transform: translateX(20%);
    transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
  .moveBig {
    transform: translateX(-63%);
    transition: all 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
  .movebackBig {
    transform: translateX(35%);
    transition: all 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
</style>
