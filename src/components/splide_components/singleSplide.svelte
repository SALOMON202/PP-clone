<script>
  import { load } from "recaptcha-v3";
  export let singleSong;
  export let marginBottom;
  async function generateToken() {
    const recaptcha = await load("6LcIadYfAAAAABEogXPi4R0-p_NJ6CIEyN0bfoI_");
    let token = await recaptcha.execute("get");
    return token;
  }

  const loadData = async () => {
    const url = `https://api-dev.publicpressure.io/main/v1/template/${contract}`;
    const token = await generateToken();
    const response = await fetch(url, {
      headers: {
        "g-recaptcha-response": token,
      },
    });
    const data = await response.json();
    return data;
  };
  const src = singleSong.coverImage;
  const title = singleSong.title;
  const by = singleSong.createdBy.displayName;
  const minted = singleSong.edition;
  const price = singleSong.usdPrice;
  const contract = singleSong.address;
  const endDateStr = singleSong.endDate;
  let date = new Date();
  let endDate = new Date(endDateStr);
</script>

{#await loadData() then}
  <a href="/nft">
    <div
      class="flex flex-row justify-center  {marginBottom} cursor-pointer  "
      on:keydown
      on:click={() => {
        localStorage.setItem("nftToOpen", contract);
      }}
    >
      <!-- ml-6 mr-6 -->
      <div class=" flex flex-col ">
        <div
          class="absolute bg-surface-inverted w-20 h-6 text-center rounded-xl text-surface-Tinverted font-bold text-sm mt-12 ml-2"
        >
          {singleSong.mediaType}
        </div>
        <button
          ><div
            class="rounded-full bg-surface-input h-9 w-9 relative md:top-72 minwTop maxWbtn"
          >
            <svg
              class="relative"
              style=" left:14px; top:9px"
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 18V0L12 9L0 18Z" fill="white" />
            </svg>
          </div>
        </button>

        <div
          class=" md:w-72 md:h-72 bg-cover bg-center minh minw maxW maxH"
          style="min-height:16rem ; background-image: url({src});"
        />
        <div class="w-96 md:w-72  maxW bg-surface-input flex flex-col minw">
          <span class="text-surface-Tbase font-bold text-sm  p-2 pl-3"
            ><nobr> {title}</nobr></span
          >
          <span class="text-surface-Tbase font-normal text-sm pl-3 pt-1 pb-4"
            >{by}</span
          >
          <hr class="opacity-50 ml-3 mr-3 " />
          <div class="flex flex-row justify-between pt-4">
            {#if date < endDate}
              <span class="text-surface-Tbase  font-bold text-sm pl-3"
                >Now available</span
              >

              <span class="text-surface-Tbase text-sm"
                >Minted : <span class="text-surface-Tbase pr-3">{minted}</span
                ></span
              >
            {:else if date > endDate}
              <span class="text-surface-Tbase text-sm pl-3"
                >Secondary Listing</span
              >
              <span class="text-surface-Tbase text-sm  pr-4">Starting from</span
              >
            {/if}
          </div>
          <div class="flex flex-row justify-between pb-4">
            {#if date < endDate}
              <span class="text-surface-btnSpec pl-3 font-bold">Buy Now!</span>
              <span class="text-surface-btnSpec pr-3 font-bold"
                >{price}.00 Usd</span
              >
            {:else}
              <span class="text-surface-Tbase pl-3 font-bold"
                >0 of {singleSong.edition}</span
              >
              {#if singleSong.listingsCount <= 0}
                <span class="text-surface-Tbase pr-3 font-bold">N/A</span>
              {:else}
                <span class="text-surface-Tbase pr-3 font-bold"
                  >{singleSong.listingsCount}.00 USD</span
                >
              {/if}
            {/if}
          </div>
        </div>
      </div>
    </div>
  </a>
{/await}

<style>
  @media screen and (max-width: 768px) {
    .minw {
      width: 600px;
    }
    .minh {
      height: 600px;
    }
    .minwTop {
      top: 600px;
    }
  }
  @media screen and (min-width: 1250px) {
    .maxH {
      height: 256px;
    }
    .maxW {
      width: 256px;
    }
    .maxWbtn {
      top: 255px;
    }
  }
</style>
