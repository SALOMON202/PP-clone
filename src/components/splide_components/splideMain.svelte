<script>
  export let imgSrc;
  export let creator;
  export let title;
</script>

<div>
  <a href="/collection">
    <div
      class="bg-cover bg-no-repeat bg-center mt-20  ml-0 mr-0 mb-4 flex justify-center"
      style="background-image: url({imgSrc}) ; height:550px"
    >
      <div class="ml-12 mt-40" style="width:1400px">
        <div class="span-collector flex flex-col ml-5 pt-28 relative top-20 ">
          <div
            class="bg-surface-primary w-min mb-3  leading-7 rounded-sm pt-4 pb-4"
          >
            <span class="text-surface-Tbase text-4xl font-bold p-4 "
              ><nobr>{title}</nobr></span
            ><br />
            <span class="text-surface-Tbase text-xl font-bold p-4 "
              >{creator}</span
            >
          </div>
          <div
            class="bg-surface-btnSpec  hover:opacity-90 w-60 h-10 rounded-sm text-center pt-1.5 "
          >
            <span class="text-surface-Tbase ">View Drop</span>
          </div>
        </div>
      </div>
    </div></a
  >
</div>
