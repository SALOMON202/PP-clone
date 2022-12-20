<script>
  import MdRemoveRedEye from "svelte-icons/md/MdRemoveRedEye.svelte";
  const changeInputType = (e) => {
    inputChanger = !inputChanger;
    if (inputChanger) {
      inputType = " text";
    } else {
      inputType = "password";
    }
  };
  let inputType = "password";
  let inputChanger = false;
</script>

<div class="mt-44 2xl:mx-[36%]">
  <div class="flex flex-col ">
    <span class="text-surface-Tbase font-bold text-3xl">Log in</span>

    <span class="text-surface-Tbase mt-6"
      >Don't have an account? <span
        class="text-surface-btnSpec font-semibold pl-2 "
        ><a href="/signup">Sign up</a>
      </span></span
    >
    <form action="" class="flex flex-col">
      <label for="email" class="text-surface-Tbase opacity-50 mt-8 pb-1"
        >Email</label
      >
      <input
        type="email"
        class=" bg-surface-input h-16 mb-2 focus: outline-none indent-4  caret-red-600 text-surface-Tbase max-w-[1400px] "
        name="email"
      />
      <div class="flex justify-between  max-w-[1400px]">
        <label for="password" class="text-surface-Tbase opacity-50 "
          >Password</label
        >
        <span class="text-surface-btnSpec font-bold text-medium pt-1 pb-1 "
          ><a href="/reset">Forgot Password?</a>
        </span>
      </div>
      <div
        class="flex flex-row pt-4 cursor-pointer pr-3 h-16 bg-surface-input  max-w-[1400px]"
      >
        <input
          type={inputType}
          class="bg-surface-input  h-8 w-full indent-4 focus: outline-none caret-red-600 text-surface-Tbase"
          name="password"
        />

        <div class="icon w-8 invert" on:click={changeInputType} on:keydown>
          <MdRemoveRedEye />
        </div>
      </div>
      <input
        type="submit"
        class="bg-surface-btnSpec h-14 w-80 rounded-sm text-surface-Tbase mt-20 text-xl cursor-pointer font-bold text-center hover:brightness-75 "
        value="Log in"
      />
    </form>

    <span class="text-surface-Tbase text-xl mt-20 mb-64"
      >This site is protected by reCAPTCHA and the Google <span
        class="text-surface-btnSpec font-bold">Privacy Policy</span
      >
      and
      <span class="text-surface-btnSpec font-bold">Terms of Service</span> apply.</span
    >
  </div>
</div>
