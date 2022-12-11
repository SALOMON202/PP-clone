<script>
  import Nft from "./nft.svelte";
  import Details from "./details.svelte";

  let showHr = true;
  function changeScreenNft() {
    showHr = true;
  }
  function changeScreenDet() {
    showHr = false;
  }
</script>

<div
  class="bg-cover bg-no-repeat bg-center mt-24 h-64 ml-0 mr-0 mb-96"
  style="background-image: url('1667378390215.jpeg') ;
    margin-bottom: 1100px"
>
  <div
    class="h-full w-full "
    style="background: rgb(4,5,6);
    background: linear-gradient(0deg, rgba(4,5,6,1) 0%, rgba(247,243,243,0) 100%);"
  >
    <div class="span-collector flex flex-col ml-5 pt- relative max-w-40 ">
      <div class="w-40 h-20 mb-3 pl-4 pt-6 leading-7 ">
        <span class="text-surface-Tbase text-3xl ">One</span><br />
        <span class="text-surface-Tbase text-xl">Alien AirForce</span>
      </div>
      <div class="w-40 h-20  pl-4 pt-6 leading-7 " />
      <span class="text-surface-Tbase text-xl">Released</span>
      <span class="text-surface-Tbase text-3xl">02 Nov 22</span>
    </div>
  </div>

  <div class="flex flex-row justify-center mt-12 mb-4 ">
    <div
      class="flex flex-col text-center cursor-pointer"
      on:keydown
      on:click={changeScreenNft}
      style="width:50% "
    >
      <span class="text-surface-Tbase font-bold">NFTs</span>
      <hr class="mt-2 hidden" class:show={showHr} />
    </div>
    <div
      class="flex flex-col text-center cursor-pointer"
      on:keydown
      on:click={changeScreenDet}
      style="width:45%"
    >
      <span class="text-surface-Tbase font-bold ">Details</span>
      <hr class="mt-2 hidden" class:show={!showHr} />
    </div>
  </div>
  <div class="hidden" class:show={showHr}><Nft /></div>
  <div class="hidden" class:show={!showHr}><Details /></div>
</div>

<style>
  .show {
    display: block;
  }
</style>
