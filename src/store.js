import {writable} from 'svelte/store'


const music= writable( [
  {
    title: "The World will never undertand",
    by: "Alien AirForce",
    minted: 28,
    price: "3.00 USD",
    src: "portrait.jpg",
    song: "world.mp4",
    contract: "0x624e240aca8e3535b81e3f7d19ac9c3b051e817f",
  },
  {
    title: "You live in hell already",
    by: "Alien AirForce",
    minted: 18,
    price: "3.00 USD",
    src: "portrait.jpg",
    song: "hell.mp4",
    contract: "0x30806bf426bc762588d65ff9401d71b0a2203c07",
  },

  {
    title: "Got to get out of here",
    by: "Alien AirForce",
    minted: 12,
    price: "3.00 USD",
    src: "portrait.jpg",
    song: "getout.mp4",
    contract: "0x80288f1e1fe91947689340033eee3890189bdc39",
  },
  {
    title: "Goodbye miss Jane",
    by: "Alien AirForce",
    minted: 19,
    price: "3.00 USD",
    src: "portrait.jpg",
    song: "misss.mp4",
    contract: "0x0621f5eb3504026c95f26fc8b5f3bf15cca6b5a3",
  },
])


export default music