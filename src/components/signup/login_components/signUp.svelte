<script>
  import PersonalDetails from "./personalDetails.svelte";
</script>

<div class="mb-96 pt-52 w-5">
  <span class="text-4xl text-surface-Tbase font-bold  "
    ><nobr> Sign up as an individual</nobr></span
  >
  <div class="mt-10">
    <span class="text-surface-Tbase text-xl ">
      <nobr
        >Are you in a company? <span class="text-surface-btnSpec font-semibold"
          ><a href=""> Sign up as a company</a></span
        ></nobr
      ></span
    >
    <span class="text-surface-Tbase leading-10  text-xl "
      ><nobr>
        Already have an account? <span
          class="text-surface-btnSpec font-semibold"
          ><a href="/login">Log in</a>
        </span></nobr
      ></span
    >
  </div>
  <PersonalDetails />
</div>
