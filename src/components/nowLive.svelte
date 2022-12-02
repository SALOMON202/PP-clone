<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import "@splidejs/svelte-splide/css";
  // var body = document.getElementsByTagName("BODY")[0];
  //   var width = body.offsetWidth;
  const musicArray = [
    {
      first: {
        title: "The World will never undertand",
        by: "Alien AirForce",
        minted: 28,
        price: "3.00 USD",
        src: "portrait.jpg",
      },
      second: {
        title: "You live in hell already",
        by: "Alien AirForce",
        minted: 18,
        price: "3.00 USD",
        src: "portrait.jpg",
      },
    },
    {
      first: {
        title: "Got to get out of here",
        by: "Alien AirForce",
        minted: 12,
        price: "3.00 USD",
        src: "portrait.jpg",
      },
      second: {
        title: "Goodbye miss Jane",
        by: "Alien AirForce",
        minted: 19,
        price: "3.00 USD",
        src: "portrait.jpg",
      },
    },
  ];
</script>

<span class="text-surface-Tbase text-2xl ml-5  ">Now Live</span>

<Splide options={{ rewind: true }} aria-label="Svelte Splide Example">
  {#each musicArray as singleSong}
    <SplideSlide>
      <div
        class="flex flex-row justify-center  mb-16 "
        on:keydown={() => {
          dispatch("openSingleSong", [
            singleSong.first.src,
            singleSong.first.title,
            singleSong.first.by,
            singleSong.first.minted,
            singleSong.first.price,
          ]);
        }}
      >
        <div class=" flex flex-col ml-6 mr-6">
          <button
            ><div
              class="rounded-full bg-surface-input h-9 w-9  ml-3 relative"
              style="top:240px"
            />
            <svg
              style="position:relative;top:213px;left:26px"
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 18V0L12 9L0 18Z" fill="white" />
            </svg>
          </button>
          <img src={singleSong.first.src} alt="" style="width:16rem" />
          <div
            class="w-60  bg-surface-input flex flex-col pt-4"
            style="width:16rem "
          >
            <span class="text-surface-Tbase font-semibold text-sm pl-3 "
              ><nobr> {singleSong.first.title}</nobr></span
            >
            <span class="text-surface-Tbase font-normal text-xs pl-3 pt-1 pb-4"
              >{singleSong.first.by}</span
            >
            <hr class="opacity-50 ml-3 mr-3 " />
            <div class="flex flex-row justify-between pt-4">
              <span class="text-surface-Tbase text-sm pl-3">2d 7m 30s</span>
              <span class="text-surface-Tbase text-sm"
                >Minted:<span class="text-surface-Tbase pr-3"
                  >{singleSong.first.minted}</span
                ></span
              >
            </div>
            <div class="flex flex-row justify-between pb-4">
              <span class="text-surface-btnSpec pl-3">Buy Now!</span>
              <span class="text-surface-btnSpec pr-3"
                >{singleSong.first.price}</span
              >
            </div>
          </div>
        </div>

        <div class=" flex flex-col ml-6 mr-6">
          <button
            ><div
              class="rounded-full bg-surface-input h-9 w-9  ml-3 relative"
              style="top:240px"
            />
            <svg
              style="position:relative;top:213px;left:26px"
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 18V0L12 9L0 18Z" fill="white" />
            </svg>
          </button>
          <img src={singleSong.second.src} alt="" style="width:16rem " />
          <div
            class="w-60  bg-surface-input flex flex-col pt-4"
            style="width:16rem  "
          >
            <span class="text-surface-Tbase font-semibold text-sm pl-3 "
              ><nobr> {singleSong.second.title}</nobr></span
            >
            <span class="text-surface-Tbase font-normal text-xs pl-3 pt-1 pb-4"
              >{singleSong.second.by}</span
            >
            <hr class="opacity-50 ml-3 mr-3 " />
            <div class="flex flex-row justify-between pt-4">
              <span class="text-surface-Tbase text-sm pl-3">2d 7m 30s</span>
              <span class="text-surface-Tbase text-sm"
                >Minted:<span class="text-surface-Tbase pr-3"
                  >{singleSong.second.minted}</span
                ></span
              >
            </div>
            <div class="flex flex-row justify-between pb-4">
              <span class="text-surface-btnSpec pl-3">Buy Now!</span>
              <span class="text-surface-btnSpec pr-3"
                >{singleSong.second.price}</span
              >
            </div>
          </div>
        </div>
      </div>
    </SplideSlide>
  {/each}
</Splide>
