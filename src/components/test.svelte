<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";

  const projectsArray = [
    {
      title: "One",
      author: "Alien AirForce",
      released: "02 NOV 22",
      src: "1667378390215.jpeg",
    },
    {
      title: "MinimumBidTest",
      author: "5head",
      released: "25 OCT 22",
      src: " ",
    },
    {
      title: " Hi mark V2",
      author: "5head",
      released: "02 NOV 22",
      src: "tipo.jpeg",
    },
  ];
</script>

<hr class="ml-6 mr-6 mb-12" />
<div class="ml-6 mr-6 min-w-100% mb-6">
  <span class="text-2xl font-semibold text-surface-Tbase ">Test</span>

  <Splide options={{ rewind: true }} aria-label="Svelte Splide Example">
    {#each projectsArray as singleProject}
      <SplideSlide>
        <div class="mt-6">
          <img src={singleProject.src} alt="" />
          <div class="flex flex-col overflow-hidden">
            <div class="flex flex-col self-start absolute top-10 left-5">
              <span class="text-2xl text-surface-Tbase font-semibold"
                >{singleProject.title}</span
              >
              <span class="text-2xl text-surface-Tbase font-semibold"
                >{singleProject.author}</span
              >
            </div>
            <div class="flex flex-col self-baseline absolute bottom-20 left-5">
              <span class="text-base text-surface-Tbase">Released</span>
              <span class="text-2xl text-surface-Tbase font-semibold"
                >{singleProject.released}</span
              >
            </div>
          </div>
        </div>
      </SplideSlide>
    {/each}
  </Splide>
</div>
