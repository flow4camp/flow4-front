// Asset 데이터
type AssetVariant = {
    id: number;
    src: string;
} | null ;      // nullable

export const hatVariants: AssetVariant[] = [
    { id: 0, src: require('../assets/hat/hat-hiphop-hat.png') },
    { id: 1, src: require('../assets/hat/hat-brunet.png') },
    { id: 2, src: require('../assets/hat/hat-flower.png') },
];

export const faceVariants: AssetVariant[] = [
    { id: 0, src: require("../assets/face/face-basic.png") },
    { id: 1, src: require("../assets/face/face-annoyed.png") },
    { id: 2, src: require("../assets/face/face-crying.png") },
    { id: 3, src: require("../assets/face/face-drunk.png") },
    { id: 4, src: require("../assets/face/face-wicked.png") },
];

export const accVariants: AssetVariant[] = [
    { id: 0, src: require('../assets/accessory/acc-gold-necklace.png') },
    { id: 1, src: require('../assets/accessory/acc-glasses.png') },
    { id: 2, src: require('../assets/accessory/acc-alchohol.png') },
    { id: 3, src: require('../assets/accessory/acc-wine.png') },
];

export const clothesVariants: AssetVariant[] = [
    { id: 0, src: require('../assets/clothes/clothes-blue-skirt.png') },
    { id: 1, src: require('../assets/clothes/clothes-checkshirt.png') },
    { id: 2, src: require('../assets/clothes/clothes-vampire.png') },
];

export const shoeVariants: AssetVariant[] = [
    { id: 0, src: require('../assets/shoe/shoe-crocs.png') },
    { id: 1, src: require('../assets/shoe/shoe-jordan.png') },
    { id: 2, src: require('../assets/shoe/shoe-slipper.png') },
];