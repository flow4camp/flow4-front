// Asset 데이터
type AssetVariant = {
    id: number;
    src: string;
} | null ;      // nullable

export const hatVariants: AssetVariant[] = [
    { id: 0, src: require('../assets/hat-hiphop-hat.png') },
];

export const faceVariants: AssetVariant[] = [
    { id: 0, src: require("../assets/face-basic.png") },
];

export const accVariants: AssetVariant[] = [
    { id: 0, src: require('../assets/acc-gold-necklace.png') },
];

export const clothesVariants: AssetVariant[] = [
    { id: 0, src: require('../assets/clothes-blue-skirt.png') },
];

export const shoeVariants: AssetVariant[] = [
    { id: 0, src: require('../assets/shoe-crocs.png') },
];