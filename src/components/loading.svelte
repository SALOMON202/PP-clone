<div class="absolute w-full h-full overflow-hidden">
  <div
    class="mt-32 ml-6 mr-6 h-96 relative bar bg-surface-input after:h-96 after:left-6 after:w-96 after:bg-gradient-to-r "
  />
  <div class="flex flex-row justify-evenly">
    <div
      class="mt-2 ml-6 mr-6 h-96 relative minibar bg-surface-input"
      style="width:47%"
    />
    <div
      class="mt-2 ml-6 relative minibar mr-6  h-96 bg-surface-input"
      style="width:47%"
    />
  </div>
</div>

<style>
  .bar:after {
    content: "";
    position: absolute;
    z-index: 100;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0)
    );
    animation: animation 4s ease-in-out infinite;
  }

  @keyframes animation {
    0% {
      left: -60px;
    }
    50% {
      left: 35%;
    }
    100% {
      left: -60px;
    }
  }

  .minibar:after {
    content: "";
    position: absolute;
    z-index: 100;
    left: 24px;
    width: 100px;
    height: 24rem;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0)
    );
    animation: miniAnimation 4s ease-in-out infinite;
  }

  @keyframes miniAnimation {
    0% {
      left: 0;
    }
    50% {
      left: 65%;
    }
    100% {
      left: 0;
    }
  }
</style>
