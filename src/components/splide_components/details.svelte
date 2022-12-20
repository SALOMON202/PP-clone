<script>
  export let data;
</script>

<div class="">
  <span class="text-2xl text-surface-Tbase">Description</span> <br />
  <span class="text-surface-Tbase text-sm  ">{data.description}</span>
  <div class="flex flex-col">
    <div class="flex flex-row ">
      <div
        class="rounded-full h-24 w-24 bg-surface-btnSpec mt-5 text-surface-Tbase font-bold text-center text-6xl pt-3"
        style="background-image:url({data.createdBy.profileImage})"
      />
      <div class="flex flex-col mt-7 ml-3">
        <span class="text-xl text-surface-Tbase font-semibold"
          >{data.createdBy.displayName}</span
        >
        <span class="text-sm text-surface-Tbase">@alienAirForce-Artist</span>
      </div>
    </div>
    <button class="w-24 h-8 mt-4 text-sm bg-surface-inverted">
      Visit Profile</button
    >
  </div>
</div>
