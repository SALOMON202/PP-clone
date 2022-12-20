<script>
  export let data;
</script>

{#if data.mediaType === "music"}
  <div class="mt-6">
    <div class="flex flex-col gap-7">
      <div class="flex flex-row gap-5">
        <div class="flex flex-col">
          <span class="text-surface-Tbase opacity-40">Genre</span>
          <span class="text-surface-Tbase">{data.genres}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-surface-Tbase opacity-40">Format</span>
          <span class="text-surface-Tbase">WAV</span>
        </div>
        <div class="flex flex-col">
          {#if data.downloadable}
            <span class="text-surface-Tbase opacity-40">Features</span>
            <span class="text-surface-Tbase">Downloadable</span>
          {/if}
        </div>
      </div>

      <div class="flex flex-col">
        <span class="text-surface-Tbase opacity-40">Credits</span>
        <span class="text-surface-btnSpec">{data.createdBy.displayName}</span>
      </div>

      <div class="flex flex-col">
        <span class="text-surface-Tbase opacity-40">Contract address</span>
        <span class="text-surface-btnSpec">{data.address}</span>
      </div>

      <div class="flex flex-col mb-24">
        <span class="text-surface-Tbase text-xl">Description</span>
        <span class="text-surface-Tbase">{data.description}</span>
      </div>
    </div>
  </div>
{:else if data.mediaType == "collectible"}
  <div class="mt-6">
    <div class="flex flex-col gap-7">
      <div class="flex flex-row gap-5">
        <div class="flex flex-col">
          <span class="text-surface-Tbase opacity-40">type</span>
          <span class="text-surface-Tbase">{data.typeArt}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-surface-Tbase opacity-40">Format</span>
          <span class="text-surface-Tbase">fff</span>
        </div>
      </div>
      <div class="flex flex-row">
        <div
          class="rounded-full h-7 w-7 mt-2 text-surface-Tbase font-bold text-center lg:ml-10 "
          style="background-image:url({data.series.cardImage})"
        />
        <div class="flex flex-col mt-1 ml-1">
          <span
            class="text-surface-Tbase text-xs 
  "
          >
            {data.createdBy.displayName}
          </span>
          <span
            class="text-surface-Tbase text-xs leading-3
  ">Label</span
          >
        </div>
      </div>

      <div class="flex flex-col">
        <span class="text-surface-Tbase opacity-40">Contract address</span>
        <span class="text-surface-btnSpec">{data.address}</span>
      </div>

      <div class="flex flex-col mb-24">
        <span class="text-surface-Tbase text-xl">Description</span>
        <span class="text-surface-Tbase">{data.description}</span>
      </div>
    </div>
  </div>
{/if}
