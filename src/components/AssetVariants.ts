// Asset 데이터
type AssetVariant = {
    id: number;
    src: string;
} | null ;      // nullable

export const hatVariants: AssetVariant[] = [
    { id: 0, src: require('../assets/hat/hat-hiphop-hat.png') },
    { id: 1, src: require('../assets/hat/hat-brunet.png') },
    { id: 2, src: require('../assets/hat/hat-flower.png') },
    { id: 3, src: require('../assets/hat/hat-police.png') },
    { id: 4, src: require('../assets/hat/hat-sprout.png') },
    { id: 5, src: require('../assets/hat/hat-mario.png') },
    { id: 6, src: require('../assets/hat/hat-link-hat.png') },
];

export const faceVariants: AssetVariant[] = [
    { id: 0, src: require("../assets/face/face-basic.png") },
    { id: 1, src: require("../assets/face/face-annoyed.png") },
    { id: 2, src: require("../assets/face/face-crying.png") },
    { id: 3, src: require("../assets/face/face-drunk.png") },
    { id: 4, src: require("../assets/face/face-wicked.png") },
    { id: 5, src: require("../assets/face/face-cute.png") },
    { id: 6, src: require("../assets/face/face-melong.png") },
    { id: 7, src: require("../assets/face/face-relief.png") },
    { id: 8, src: require("../assets/face/face-smile.png") },
];

export const accVariants: AssetVariant[] = [
    { id: 0, src: require('../assets/accessory/acc-gold-necklace.png') },
    { id: 1, src: require('../assets/accessory/acc-glasses.png') },
    { id: 2, src: require('../assets/accessory/acc-alchohol.png') },
    { id: 3, src: require('../assets/accessory/acc-wine.png') },
    { id: 4, src: require('../assets/accessory/acc-baton.png') },
    { id: 5, src: require('../assets/accessory/acc-name-tag.png') },
    { id: 6, src: require('../assets/accessory/acc-hyrule-hero.png') },
];

export const clothesVariants: AssetVariant[] = [
    { id: 0, src: require('../assets/clothes/clothes-blue-skirt.png') },
    { id: 1, src: require('../assets/clothes/clothes-checkshirt.png') },
    { id: 2, src: require('../assets/clothes/clothes-vampire.png') },
    { id: 3, src: require('../assets/clothes/clothes-office.png')},
    { id: 4, src: require('../assets/clothes/clothes-patrick.png')},
];

export const shoeVariants: AssetVariant[] = [
    { id: 0, src: require('../assets/shoe/shoe-crocs.png') },
    { id: 1, src: require('../assets/shoe/shoe-jordan.png') },
    { id: 2, src: require('../assets/shoe/shoe-slipper.png') },
];