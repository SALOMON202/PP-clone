<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
  import SingleSplide from "./singleSplide.svelte";
  export let singleDataToPass;
  let marginBottom = "mb-16";
</script>

<span class="text-surface-Tbase text-2xl ml-12 relative top-5 ">Now Live</span>
<div class="m-0">
  <Splide
    options={{
      rewind: true,
      perPage: 4,
      breakpoints: {
        768: {
          perPage: 1,
        },
        1100: {
          perPage: 2,
        },
        1250: {
          perPage: 3,
        },
      },
      perMove: 1,
      pagination: false,
    }}
    aria-label="Svelte Splide Example"
  >
    {#each singleDataToPass as singleSong}
      <SplideSlide>
        <SingleSplide {marginBottom} {singleSong} />
      </SplideSlide>
    {/each}
  </Splide>
</div>
<hr />
