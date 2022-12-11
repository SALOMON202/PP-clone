<script>
  export let infoToPassToSingleSong;
</script>

<div class="mt-6">
  <div class="flex flex-col gap-7">
    <div class="flex flex-row gap-5">
      <div class="flex flex-col">
        <span class="text-surface-Tbase opacity-40">Genre</span>
        <span class="text-surface-Tbase">Alternative</span>
      </div>
      <div class="flex flex-col">
        <span class="text-surface-Tbase opacity-40">Format</span>
        <span class="text-surface-Tbase">WAV</span>
      </div>
      <div class="flex flex-col">
        <span class="text-surface-Tbase opacity-40">Features</span>
        <span class="text-surface-Tbase">Downloadable</span>
      </div>
    </div>

    <div class="flex flex-col">
      <span class="text-surface-Tbase opacity-40">Credits</span>
      <span class="text-surface-btnSpec">{infoToPassToSingleSong[2]}</span>
    </div>

    <div class="flex flex-col">
      <span class="text-surface-Tbase opacity-40">Contract address</span>
      <span class="text-surface-btnSpec">{infoToPassToSingleSong[6]}</span>
    </div>

    <div class="flex flex-col mb-24">
      <span class="text-surface-Tbase text-xl">Description</span>
      <span class="text-surface-Tbase"
        >Alien Airforce, AKA Crispin Gray, release their debut EP ‘One’.
        Crispin, former guitarist and songwriter for Daisy Chainsaw, said Alien
        Airforce was born as the result of him wanting to embrace modern
        technology and being able to take complete control of his music again.
        Daisy Chainsaw, best known for their 1992 chart hit ‘Love Your Money’
        catapulted Crispin to a world of touring and mixing with the rock‘n’roll
        hierarchy, with the likes of Dave Grohl, Eddie Vedder and Marilyn Manson
        being fans. But he admits that sometimes in the early days, his
        creativity was compromised, saying, “It was incredibly frustrating how
        often one had to accept your work being released in a form you didn't
        like or agree with.”</span
      >
    </div>
  </div>
</div>
