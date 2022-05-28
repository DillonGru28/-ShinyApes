const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "The Shiny Apes";
const description = "https://www.theshinyapes.com The Shiny Apes is a community of like-minded individuals who are committed to dominating the NFT market, we are also laser-focused on building a long-term community. With a unique project that is not only focused on making profits but also on giving back to the community, creating new resources for those with mental health needs, and advancing the resources that are already available. Our goal is to create a platform that is not only focused on generating profits but also on making a real impact and improving the lives of those struggling with mental health. This is a unique opportunity to join a movement that is focused on making a real impact and improving the lives of those in need!";
const baseUri = "ipfs://QmRzjF2F5TohdJRgsPc2aay1uzx3LzP9h1TrnKxeCN5UPq";

const solanaMetadata = {
  symbol: "TSA",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.theshinyapes.com/",
  creators: [
    {
      address: "0x49c88FdB4b37cc60f60e135ee360DC6E7C41036f",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 833,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "jacket" },
      { name: "necklace" },
      { name: "head" },
      { name: "teeth" },
      { name: "eyes" },
      { name: "face tatt 1" },
      { name: "face tatt 2" },
      { name: "earings" },
      { name: "bullet wounds" },
      { name: "sunglasses" },
      { name: "hats" },
      { name: "knife wound" },
    ],
  },
  {
    growEditionSizeTo: 1666,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "sweater" },
      { name: "necklace" },
      { name: "head" },
      { name: "teeth" },
      { name: "eyes" },
      { name: "face tatt 1" },
      { name: "face tatt 2" },
      { name: "earings" },
      { name: "bullet wounds" },
      { name: "sunglasses" },
      { name: "hats" },
      { name: "knife wound" },
    ],
  },
  {
    growEditionSizeTo: 2499,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "tracksuit" },
      { name: "necklace" },
      { name: "head" },
      { name: "teeth" },
      { name: "eyes" },
      { name: "face tatt 1" },
      { name: "face tatt 2" },
      { name: "earings" },
      { name: "bullet wounds" },
      { name: "sunglasses" },
      { name: "hats" },
      { name: "knife wound" },
    ],
  },
  {
    growEditionSizeTo: 3332,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "sweater" },
      { name: "head" },
      { name: "teeth" },
      { name: "eyes" },
      { name: "face tatt 1" },
      { name: "face tatt 2" },
      { name: "earings" },
      { name: "bullet wounds" },
      { name: "hats" },
    ],
  },
  {
    growEditionSizeTo: 4165,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "jacket" },
      { name: "head" },
      { name: "teeth" },
      { name: "eyes" },
      { name: "face tatt 1" },
      { name: "face tatt 2" },
      { name: "earings" },
      { name: "bullet wounds" },
      { name: "hats" },
    ],
  },
  {
    growEditionSizeTo: 4998,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "tracksuit" },
      { name: "head" },
      { name: "teeth" },
      { name: "eyes" },
      { name: "face tatt 1" },
      { name: "face tatt 2" },
      { name: "earings" },
      { name: "bullet wounds" },
      { name: "hats" },
    ],
  },
  {
    growEditionSizeTo: 5831,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "jacket" },
      { name: "necklace" },
      { name: "head" },
      { name: "teeth" },
      { name: "eyes" },
      { name: "face tatt 1" },
      { name: "face tatt 2" },
      { name: "earings" },
    ],
  },
  {
    growEditionSizeTo: 6664,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "sweater" },
      { name: "necklace" },
      { name: "head" },
      { name: "teeth" },
      { name: "eyes" },
      { name: "face tatt 1" },
      { name: "face tatt 2" },
      { name: "earings" },
    ],
  },
  {
    growEditionSizeTo: 7497,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "tracksuit" },
      { name: "necklace" },
      { name: "head" },
      { name: "teeth" },
      { name: "eyes" },
      { name: "face tatt 1" },
      { name: "face tatt 2" },
      { name: "earings" },
    ],
  },
  {
    growEditionSizeTo: 8330,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "jacket" },
      { name: "necklace" },
      { name: "head" },
      { name: "teeth" },
      { name: "eyes" },
      { name: "earings" },
    ],
  },
  {
    growEditionSizeTo: 9163,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "sweater" },
      { name: "necklace" },
      { name: "head" },
      { name: "teeth" },
      { name: "eyes" },
      { name: "earings" },
    ],
  },
  {
    growEditionSizeTo: 10000,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "tracksuit" },
      { name: "necklace" },
      { name: "head" },
      { name: "teeth" },
      { name: "eyes" },
      { name: "earings" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
  smoothing: true,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
