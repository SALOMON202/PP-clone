<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import { createEventDispatcher } from "svelte";
  import "@splidejs/svelte-splide/css";
  import SingleSplide from "./singleSplide.svelte";
  import music from "../../store";
  const dispatch = createEventDispatcher();
  const selectSong = (e) => {
    selectedSong = e.detail;
    dispatch("openSingleSong", selectedSong);
  };
  let selectedSong = [];
  let marginBottom = "mb-16";
  let musicArray;
  music.subscribe((data) => {
    musicArray = data;
  });
</script>

<span class="text-surface-Tbase text-2xl ml-12 relative top-5 ">Now Live</span>
<div>
  <Splide
    options={{
      rewind: true,
      perPage: 4,
      breakpoints: {
        768: {
          perPage: 1,
        },
        992: {
          perPage: 2,
        },
        1200: {
          perPage: 3,
        },
      },
      perMove: 1,
      pagination: false,
    }}
    aria-label="Svelte Splide Example"
  >
    {#each musicArray as singleSong}
      <SplideSlide>
        <SingleSplide
          {marginBottom}
          src={singleSong.src}
          title={singleSong.title}
          by={singleSong.by}
          minted={singleSong.minted}
          price={singleSong.price}
          song={singleSong.song}
          contract={singleSong.contract}
          on:openSingleSong={selectSong}
        />
      </SplideSlide>
    {/each}
  </Splide>
</div>
