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
  <hr class="mt-5 mb-5 w-[60vw]" />

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
          class="flex flex-row pt-4 cursor-pointer pr-3 h-16 bg-surface-input w-[60vw]  indent-4 focus: outline-none caret-red-600 pb-4 text-surface-Tbase"
        />
      </div>
      <div class="flex flex-col mt-6">
        <label for="text" class="text-surface-Tbase opacity-50 "
          >Last name *</label
        >
        <input
          type="text"
          name="text"
          class="w-[60vw] flex flex-row pt-4 cursor-pointer pr-3 h-16 bg-surface-input  indent-4 focus: outline-none caret-red-600 pb-4 text-surface-Tbase"
        />
      </div>
      <div class="flex flex-col mt-6">
        <label for="email" class="text-surface-Tbase opacity-50 ">Email *</label
        >
        <input
          type="email"
          name="email"
          class="w-[60vw] flex flex-row pt-4 cursor-pointer pr-3 h-16 bg-surface-input  indent-4 focus: outline-none caret-red-600 pb-4 text-surface-Tbase"
        />
      </div>
      <div class="flex justify-between">
        <label for="password" class="text-surface-Tbase opacity-50 pt-6 "
          >Create Password *</label
        >
      </div>
      <div
        class="flex flex-row pt-4 cursor-pointer pr-3 h-16 bg-surface-input w-[60vw] "
      >
        <input
          type={inputType}
          class="w-[60vw] bg-surface-input  h-8 indent-4 focus: outline-none caret-red-600 text-surface-Tbase"
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
          class="flex flex-row pt-4 cursor-pointer pr-3 h-16 bg-surface-input w-[60vw] "
        >
          <input
            type={inputType}
            class="w-[60vw] bg-surface-input cursor-pointer h-8 indent-4 focus: outline-none caret-red-600 text-surface-Tbase"
            name="password"
          />

          <div class="icon w-8 invert" on:click={changeInputType} on:keydown>
            <MdRemoveRedEye />
          </div>
        </div>
        <div class="flex flex-row w-[60vw] gap-[6.6%] ">
          <div class="flex flex-col mt-6 ">
            <label for="date" class="text-surface-Tbase opacity-50 "
              >Date of Birth *</label
            >
            <input
              type="date"
              name="date"
              class="w-[28vw] bg-surface-input cursor-pointer h-16 indent-3 pr-2 focus: outline-none caret-red-600 text-surface-Tbase"
            />
          </div>
          <div class="flex flex-col mt-6">
            <label for="gender" class="text-surface-Tbase opacity-50 "
              >Gender*</label
            >
            <input
              type="text"
              name="gender"
              class="w-[28vw] bg-surface-input cursor-pointer h-16 indent-4 focus: outline-none caret-red-600 text-surface-Tbase"
            />
          </div>
        </div>
        <div class="flex flex-col mt-6">
          <label for="country" class="text-surface-Tbase opacity-50 "
            >Country*</label
          >
          <input
            type="text"
            name="country"
            class="w-[60vw] bg-surface-input cursor-pointer h-16 indent-4 focus: outline-none caret-red-600 text-surface-Tbase"
          />
        </div>
      </div>
      <div class="mt-8">
        <span class="text-3xl text-surface-Tbase font-semibold  "
          ><nobr> Profile Details</nobr></span
        >
      </div>
      <hr class=" mt-5 mb-5 w-[60vw]" />
      <span class=" text-surface-Tbase font-medium  "
        ><nobr>People will know you with this name on PublicPressure </nobr>
      </span>
      <div class="flex flex-col mt-6">
        <label for="Display Name " class="text-surface-Tbase opacity-50 "
          >Display Name *</label
        >
        <input
          type="text"
          name="Display Name "
          class="w-[60vw] bg-surface-input cursor-pointer h-16 indent-4 focus: outline-none caret-red-600 text-surface-Tbase"
        />
      </div>
      <div class="mt-4">
        <div class=" text-surface-Tbase font-medium w-[60vw] ">
          Choose your username carefully , it's unique for each user and you
          will not be able to change it
          <div class="flex flex-col mt-6">
            <label for="username" class="text-surface-Tbase opacity-50 "
              >Username *</label
            >
            <input
              type="text"
              name="username"
              class="w-[60vw] bg-surface-input cursor-pointer h-16 indent-4 focus: outline-none caret-red-600 text-surface-Tbase"
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
        </div>
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

      <div class=" text-surface-Tbase font-medium w-[60vw] ">
        By signing up, you agree that we may use your provided data for the
        registration and to send you notifications on our products and services.
        You can unsubscribe from notifications at any time in your settings. For
        additional info please refer to our Privacy Policy.
      </div>
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
