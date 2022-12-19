<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import SplideMain from "./splideMain.svelte";
  export let dataToPassIntoMain;
</script>

<main>
  <Splide
    options={{
      rewind: true,
      perMove: 1,
      pagination: false,
    }}
    aria-label="Svelte Splide Example"
  >
    {#each dataToPassIntoMain as singleSplide}
      <SplideSlide>
        <div
          on:keydown
          on:click={() => {
            localStorage.setItem("datas", JSON.stringify(singleSplide));
          }}
        >
          <SplideMain
            imgSrc={singleSplide.coverImage}
            dashboardImgSrc={singleSplide.dashboardImage}
            title={singleSplide.title}
            creator={singleSplide.createdBy.displayName}
          />
        </div>
      </SplideSlide>
    {/each}
  </Splide>
</main>
