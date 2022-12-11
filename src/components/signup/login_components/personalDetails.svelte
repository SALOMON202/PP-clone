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

<div class="mt-12 w-96 ">
  <span class="text-3xl text-surface-Tbase font-semibold  "
    ><nobr> Personal Details</nobr></span
  >
  <hr class="mt-5 mb-5" style="width:90vw" />

  <div class="">
    <span class=" text-surface-Tbase font-medium"
      ><nobr>These details will not be visible to the public</nobr>
    </span>

    <form action="">
      <div class="flex flex-col mt-6">
        <label for="firstname" class="text-surface-Tbase opacity-50 "
          >First name *</label
        >
        <input
          type="text"
          name="firstname"
          class="flex flex-row pt-4 cursor-pointer pr-3 h-16 bg-surface-input "
          style="width:90vw"
        />
      </div>
      <div class="flex flex-col mt-6">
        <label for="text" class="text-surface-Tbase opacity-50 "
          >Last name *</label
        >
        <input
          style="width:90vw"
          type="text"
          name="text"
          class="flex flex-row pt-4 cursor-pointer pr-3 h-16 bg-surface-input "
        />
      </div>
      <div class="flex flex-col mt-6">
        <label for="email" class="text-surface-Tbase opacity-50 ">Email *</label
        >
        <input
          style="width:90vw"
          type="email"
          name="email"
          class="flex flex-row pt-4 cursor-pointer pr-3 h-16 bg-surface-input "
        />
      </div>
      <div class="flex justify-between">
        <label for="password" class="text-surface-Tbase opacity-50 "
          >Create Password *</label
        >
      </div>
      <div
        class="flex flex-row pt-4 cursor-pointer pr-3 h-16 bg-surface-input "
        style="width:90vw"
      >
        <input
          style="width:90vw"
          type={inputType}
          class="bg-surface-input  h-8 w-full indent-4 focus: outline-none caret-red-600"
          name="password"
        />

        <div class="icon w-8 invert" on:click={changeInputType} on:keydown>
          <MdRemoveRedEye />
        </div>
      </div>
      <div class="mt-6">
        <span class=" text-surface-Tbase font-medium "
          ><nobr
            >Use at least 8 characters with a mix of letters , numbers and
            symbols ( - _ ! @)
          </nobr>
        </span>
      </div>
      <div class="flex flex-col mt-6">
        <div class="flex justify-between">
          <label for="password" class="text-surface-Tbase opacity-50 "
            >Confirm Password*</label
          >
        </div>
        <div
          class="flex flex-row pt-4 cursor-pointer pr-3 h-16 bg-surface-input "
          style="width:90vw"
        >
          <input
            style="width:90vw"
            type={inputType}
            class="bg-surface-input  h-8 indent-4 focus: outline-none caret-red-600"
            name="password"
          />

          <div class="icon w-8 invert" on:click={changeInputType} on:keydown>
            <MdRemoveRedEye />
          </div>
        </div>
        <div class="flex flex-col mt-6">
          <label for="date" class="text-surface-Tbase opacity-50 "
            >Date of Birth *</label
          >
          <input
            style="width:90vw"
            type="date"
            name="date"
            class="flex flex-row pt-4 cursor-pointer pr-3 h-16 bg-surface-input "
          />
        </div>
        <div class="flex flex-col mt-6">
          <label for="gender" class="text-surface-Tbase opacity-50 "
            >Gender*</label
          >
          <input
            style="width:90vw"
            type="text"
            name="gender"
            class="flex flex-row pt-4 cursor-pointer pr-3 h-16 bg-surface-input "
          />
        </div>
        <div class="flex flex-col mt-6">
          <label for="country" class="text-surface-Tbase opacity-50 "
            >Country*</label
          >
          <input
            style="width:90vw"
            type="text"
            name="country"
            class="flex flex-row pt-4 cursor-pointer pr-3 h-16 bg-surface-input "
          />
        </div>
      </div>
      <div class="mt-8">
        <span class="text-3xl text-surface-Tbase font-semibold  "
          ><nobr> Profile Details</nobr></span
        >
      </div>
      <hr class=" mt-5 mb-5" style="width:90vw" />
      <span class=" text-surface-Tbase font-medium  "
        ><nobr>People will know you with this name on PublicPressure </nobr>
      </span>
      <div class="flex flex-col mt-6">
        <label for="Display Name " class="text-surface-Tbase opacity-50 "
          >Display Name *</label
        >
        <input
          style="width:90vw"
          type="text"
          name="Display Name "
          class="flex flex-row pt-4 cursor-pointer pr-3 h-16 bg-surface-input "
        />
      </div>
      <div class="mt-4">
        <span class=" text-surface-Tbase font-medium "
          ><nobr
            >Choose your username carefully , it's unique for each user and you
            will not be able to change it
          </nobr>
          <div class="flex flex-col mt-6">
            <label for="username" class="text-surface-Tbase opacity-50 "
              >Username *</label
            >
            <input
              style="width:90vw"
              type="text"
              name="username"
              class="flex flex-row pt-4 cursor-pointer pr-3 h-16 bg-surface-input "
            />
          </div>
          <ul class="ml-6 mb-3 mt-3 list-disc">
            <li class=" text-surface-Tbase font-medium">
              <nobr> 4minimum lowercase characters</nobr>
            </li>
            <li class=" text-surface-Tbase font-medium">
              <nobr>Numbers (optional)</nobr>
            </li>
            <li class=" text-surface-Tbase font-medium">
              <nobr> Underscores or dots (optional)</nobr>
            </li>
          </ul>
        </span>
      </div>

      <div class="flex flex-col gap-10 mb-8 ml-2">
        <div class="flex flex-row items-center gap-5 ">
          <input type="checkbox" class=" h-5 relative " />
          <span class="text-surface-Tbase font-medium"
            >I have read the <span class="text-surface-btnSpec"
              >Privacy Policy</span
            >
            and i accept the
            <span class="text-surface-btnSpec"
              >General Terms and Conditions</span
            ></span
          >
        </div>
        <div class="flex flex-row items-center gap-5">
          <input type="checkbox" class=" h-5 relative " />
          <span class="text-surface-Tbase font-medium"
            >Subscribe to our newsletter and you will always receive updates on
            NFT drops and new features.</span
          >
        </div>
      </div>

      <span class=" text-surface-Tbase font-medium ">
        By signing up, you agree that we may use your provided data for the
        registration and to send you notifications on our products and services.
        You can unsubscribe from notifications at any time in your settings. For
        additional info please refer to our Privacy Policy.</span
      >
      <input
        class="bg-surface-btnSpec text-surface-Tbase font-bold rounded-sm mr-6 h-10 pl-8 pr-8 hover:bg-surface-btnSpec hover:bg-opacity-50 text-center mt-8 mb-16"
        value="Next"
      />
    </form>
    <span class=" text-surface-Tbase font-medium ">
      This site is protected by reCAPTCHA and the Google <span
        class="text-surface-btnSpec"
      >
        Privacy Policy</span
      >
      and <span class="text-surface-btnSpec"> Terms of Service </span>apply.
    </span>
  </div>
</div>
