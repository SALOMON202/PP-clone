<script>
  import { Player, Video } from "@vime/svelte";
  import Listings from "./listings.svelte";
  import { onMount } from "svelte";
  import SingleSongDetails from "./singleSongDetails.svelte";
  import dayjs from "dayjs";
  export let data;
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
  const activateListings = (e) => {
    switchBetweenListAndDetail = false;
  };
  const activateDetails = (e) => {
    switchBetweenListAndDetail = true;
  };
  const toggleDialog = () => {
    dialogToggler = !dialogToggler;
    dialogToggler = dialogToggler;
    console.log(dialogToggler);
  };
  const endDateStr = data.endDate;
  let date = new Date();
  let endDate = new Date(endDateStr);
  let _BIGSCREEN_ = 1024;
  let horiFlexDir;
  let vertiFlexDir;
  let aspect;
  let switchBetweenListAndDetail = false;
  let dialogToggler = false;

  onMount(() => {
    switchFlexDir();
  });
</script>

<svelte:window on:resize={switchFlexDir} />

<div
  class="mt-36 mr-6  flex  flex-col lg:flex-row lg:w-[465px] mb-12 min-w-[600px] w-[100%] "
>
  <div class="bg-black w-[100%] h-[482px] changeBg">
    <div class=" flex justify-center lg:w-[465px] lg:min-w-[465px]">
      <div class="videoplay w-[30rem] ">
        <Player controls aspectRatio="1:1">
          <Video crossorigin="" poster={data.coverImage}>
            <source data-src={data.mediaLink} />
          </Video>
        </Player>
      </div>
    </div>
  </div>
  <div class="">
    <div
      class="flex flex-row justify-between mt-6 lg:w-96 lg:mt-0 lg:ml-12 w-[100%] mr-2 "
    >
      <span class="text-4xl text-surface-Tbase font-bold ">
        <nobr> {data.title}</nobr>
      </span>
      <div class="w-12 h-12 bg-surface-input rounded-sm ">
        <button on:click={toggleDialog}
          ><svg
            width="40"
            class="relative bottom-[3px]"
            viewBox="-30 -30 100 100"
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
        <div
          class="h-20 w-28  bg-surface-input relative hidden right-20 top-2  rounded-xl border-t border-t-slate-500 border-t-solid "
          class:show={dialogToggler}
        >
          <div class=" text-surface-Tbase ml-5 pt-2 ">Share on:</div>
          <span class=" text-surface-Tbase ml-5 relative top-2 "
            ><a
              href="https:/twitter.com/intent/tweet?text=Public%20Pressure%20-%20Public%20Pressure%0D%0Ahttps://dev.publicpressure.io/nft/0x2e677fee560f0513d00e885a25b55828251d97a3%0D%0A%23publicpressure%20via%20@jointhepressure%20https://dev.publicpressure.io?route=nft%26path=0x2e677fee560f0513d00e885a25b55828251d97a3&original_referer=https://dev.publicpressure.io/nft/0x2e677fee560f0513d00e885a25b55828251d97a3&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&original_referer=https://dev.publicpressure.io/nft/0x2e677fee560f0513d00e885a25b55828251d97a3"
              >Twitter</a
            ></span
          >
        </div>
      </div>
    </div>
    <div class="flex flex-col ">
      <span class="flex flex-row "
        ><div
          class="rounded-full h-8 w-8 bg-surface-btnSpec mt-2 text-surface-Tbase font-bold text-xl text-center lg:ml-12"
        >
          {data.createdBy.displayName[0]}
        </div>
        <div class="flex flex-col mt-1 ml-1">
          <span
            class="text-surface-Tbase
        "
          >
            {data.createdBy.displayName}
          </span>
          <span
            class="text-surface-Tbase text-xs
        ">Artist</span
          >
        </div>
      </span>

      <span>
        <span
          class="mt-2 text-surface-Tbase opacity-40 font-semibold text-sm lg:ml-12"
          >Collection
        </span>
        <span class="text-surface-btnSpec ">{data.series.title}</span>
      </span>

      <span>
        <span
          class="mt-2 text-surface-Tbase opacity-40 font-semibold text-sm lg:ml-12"
          >Minted
        </span><span class="text-surface-btnSpec ">
          {data.edition}
        </span>
      </span>

      {#if endDate > date}
        <span class="lg:ml-12 mt-2 lg:mt-24">
          <span class=" text-surface-Tbase opacity-40 font-semibold text-sm "
            >Fixed price
          </span><br /><span class="text-3xl font-bold text-white"
            >{data.usdPrice}.00 USD</span
          >
        </span>
      {:else if endDate < date}
        <span class="lg:ml-12 mt-2 lg:mt-24">
          <span class=" text-surface-Tbase opacity-40 font-semibold text-sm "
            >Starting from</span
          > <br /><span class="text-3xl font-bold text-white ">N/A</span></span
        >
      {/if}
    </div>

    {#if endDate < date}
      <div
        class="h-14 bg-surface-btnSpec text-center pt-2 text-surface-Tbase hover:opacity-50 lg:ml-12 relative top-10 mb-5 ml-0 lg:mt-20 lg:pt-4"
      >
        ENDED {dayjs(`${endDate}`).format("DD MMM YY")}
      </div>
    {:else}
      <div
        class="h-14 bg-surface-btnSpec text-center pt-2 text-surface-Tbase hover:opacity-50 lg:ml-12 relative top-10 mb-5 ml-0 lg:mt-20 lg:pt-4 "
      >
        Buy NOW !
      </div>
    {/if}
  </div>
  {#if vertiFlexDir == true}
    <div class=" flex flex-row mt-10  justify-evenly ">
      <button on:click={activateDetails} class="w-[50%]">
        <div class="flex flex-col ">
          <span
            class="text-surface-Tbase  text-center font-semibold mb-2  text-xl"
            class:opacity={!switchBetweenListAndDetail}>Details</span
          >
          <hr
            class="relative w-full left-[84%] "
            class:moveBig={switchBetweenListAndDetail}
            class:movebackBig={!switchBetweenListAndDetail}
          />
        </div>
      </button>
      <button on:click={activateListings} class="w-[50%]">
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
          class="relative w-full lg:left-[63%] left-[90%]"
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
