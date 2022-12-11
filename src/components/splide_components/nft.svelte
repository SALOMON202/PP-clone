<script>
  import SingleSplide from "./singleSplide.svelte";
  import { createEventDispatcher } from "svelte";
  import music from "../../store";
  const dispatch = createEventDispatcher();
  const selectSong = (e) => {
    selectedSong = e.detail;
    dispatch("openSingleSong", selectedSong);
  };
  let selectedSong;
  let musicArray;
  music.subscribe((data) => {
    musicArray = data;
  });
</script>

<div class="flex flex-row flex-wrap gap-5 justify-center ">
  <SingleSplide
    src={musicArray[0].src}
    title={musicArray[0].title}
    by={musicArray[0].by}
    minted={musicArray[0].minted}
    price={musicArray[0].price}
    song={musicArray[0].song}
    contract={musicArray[0].contract}
    on:openSingleSong={selectSong}
  />
  <SingleSplide
    src={musicArray[1].src}
    title={musicArray[1].title}
    by={musicArray[1].by}
    minted={musicArray[1].minted}
    price={musicArray[1].price}
    song={musicArray[1].song}
    contract={musicArray[1].contract}
    on:openSingleSong={selectSong}
  />
  <SingleSplide
    src={musicArray[2].src}
    title={musicArray[2].title}
    by={musicArray[2].by}
    minted={musicArray[2].minted}
    price={musicArray[2].price}
    song={musicArray[2].song}
    contract={musicArray[2].contract}
    on:openSingleSong={selectSong}
  />
  <SingleSplide
    src={musicArray[3].src}
    title={musicArray[3].title}
    by={musicArray[3].by}
    minted={musicArray[3].minted}
    price={musicArray[3].price}
    song={musicArray[3].song}
    contract={musicArray[3].contract}
    on:openSingleSong={selectSong}
  />
</div>
