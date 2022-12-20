<script>
  import Nft from "./nft.svelte";
  import Details from "./details.svelte";
  import dayjs from "dayjs";
  let showHr = true;
  function changeScreenNft() {
    showHr = true;
  }
  function changeScreenDet() {
    showHr = false;
  }
  let datasToBeSentToCollection = JSON.parse(localStorage.getItem("datas"));
  export let data;
</script>

<div
  class="bg-cover bg-no-repeat bg-center mt-36 h-80 ml-0 mr-0 mb-[1100px]"
  style="background-image: url({data.dashboardImage}) ;"
>
  <div class="h-full w-full ">
    <div class="span-collector flex flex-col ml-2 relative  max-w-40 ">
      <div class="w-40 h-20 mb-3 pl-4 pt-5 leading-7 ">
        <span class="text-surface-Tbase text-3xl font-bold "
          ><nobr>{data.title}</nobr></span
        ><br />
        <span class="text-surface-Tbase text-xl font-bold"
          >{data.createdBy.displayName}</span
        >
      </div>
      <div class="w-40 h-20  pl-4 pt-32 leading-7 ">
        <span class="text-surface-Tbase text-sm"> Released <br /> </span>
        <span class="text-surface-Tbase text-4xl font-bold"
          ><nobr>{dayjs(`${data.startDate}`).format("DD MMM YY")}</nobr></span
        >
      </div>
    </div>
  </div>

  <div class="flex flex-row xl:justify-start justify-center mt-12  ">
    <div
      class="flex flex-col text-center cursor-pointer w-1/2 xl:w-16 xl:ml-0 xl:mr-4"
      on:keydown
      on:click={changeScreenNft}
    >
      <span class="text-surface-Tbase text-xl font-bold" class:textCol={!showHr}
        >NFTs</span
      >
      <hr class="mt-2 hidden" class:show={showHr} />
    </div>

    <div
      class="flex flex-col text-center cursor-pointer w-1/2 xl:w-16 xl:ml-4 xl:mr-4"
      on:keydown
      on:click={changeScreenDet}
    >
      <span
        class="text-surface-Tbase text-xl font-bold  "
        class:textCol={showHr}>Details</span
      >
      <hr class="mt-2 hidden " class:show={!showHr} />
    </div>
  </div>
  <hr class="invisible xl:visible" />
  <div class="hidden" class:show={showHr}>
    <Nft {datasToBeSentToCollection} />
  </div>
  <div class="hidden" class:show={!showHr}>
    <Details {data} />
  </div>
</div>
