// Store 데이터 (전체 assets)
type StoreVariant = {
    id: number;
    src: string;
    price: number;
} | null ;      // nullable

export const storeHatVariants: StoreVariant[] = [
    { id: 0, src: require('../assets/hat/hat-hiphop-hat.png'), price: 20 },
    { id: 1, src: require('../assets/hat/hat-brunet.png'), price: 25 },
    { id: 2, src: require('../assets/hat/hat-flower.png'), price: 15 },
    { id: 3, src: require('../assets/hat/hat-police.png'), price: 30 },
    { id: 4, src: require('../assets/hat/hat-sprout.png'), price: 10 },
    { id: 5, src: require('../assets/hat/hat-mario.png'), price: 30 },
    { id: 6, src: require('../assets/hat/hat-link-hat.png'), price: 20 },
];

export const storeFaceVariants: StoreVariant[] = [
    { id: 0, src: require("../assets/face/face-basic.png"), price: 0 },
    { id: 1, src: require("../assets/face/face-annoyed.png"), price: 10 },
    { id: 2, src: require("../assets/face/face-crying.png"), price: 15 },
    { id: 3, src: require("../assets/face/face-drunk.png"), price: 15 },
    { id: 4, src: require("../assets/face/face-wicked.png"), price: 15 },
    { id: 5, src: require("../assets/face/face-cute.png"), price: 10 },
    { id: 6, src: require("../assets/face/face-melong.png"), price: 15 },
    { id: 7, src: require("../assets/face/face-relief.png"), price: 10 },
];

export const storeAccVariants: StoreVariant[] = [
    { id: 0, src: require('../assets/accessory/acc-gold-necklace.png'), price: 25 },
    { id: 1, src: require('../assets/accessory/acc-glasses.png'), price: 15 },
    { id: 2, src: require('../assets/accessory/acc-alchohol.png'), price: 10 },
    { id: 3, src: require('../assets/accessory/acc-wine.png'), price: 15 },
    { id: 4, src: require('../assets/accessory/acc-baton.png'), price: 20 },
    { id: 5, src: require('../assets/accessory/acc-name-tag.png'), price: 15 },
    { id: 6, src: require('../assets/accessory/acc-hyrule-hero.png'), price: 30 },
];

export const storeClothesVariants: StoreVariant[] = [
    { id: 0, src: require('../assets/clothes/clothes-blue-skirt.png'), price: 20 },
    { id: 1, src: require('../assets/clothes/clothes-checkshirt.png'), price: 25 },
    { id: 2, src: require('../assets/clothes/clothes-vampire.png'), price: 30 },
    { id: 3, src: require('../assets/clothes/clothes-office.png'), price: 20 },
    { id: 4, src: require('../assets/clothes/clothes-patrick.png'), price: 25 },
];

export const storeShoeVariants: StoreVariant[] = [
    { id: 0, src: require('../assets/shoe/shoe-crocs.png'), price: 20 },
    { id: 1, src: require('../assets/shoe/shoe-jordan.png'), price: 30 },
    { id: 2, src: require('../assets/shoe/shoe-slipper.png'), price: 15 },
];