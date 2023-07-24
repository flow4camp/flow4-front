import React, { useState } from "react";
import { Box, Image, } from '@chakra-ui/react';

// Asset 데이터
type AssetVariant = {
    id: number;
    src: string;
} | null ;      // nullable

const hatVariants: AssetVariant[] = [
    { id: 0, src: '../assets/hat-hiphop-hat.png' },
];

const faceVariants: AssetVariant[] = [
    { id: 0, src: "../assets/face-basic.png" },
];

const accVariants: AssetVariant[] = [
    { id: 0, src: '../assets/acc-gold-necklace.png' },
];

const clothesVariants: AssetVariant[] = [
    { id: 0, src: '../assets/clothes-blue-skirt.png' },
];

const shoeVariants: AssetVariant[] = [
    { id: 0, src: '../assets/shoe-crocs.png' },
];

const UserCharacter = () => {
    const [selectedHat, setSelectedHat] = useState<AssetVariant>(null);
    const [selectedFace, setSelectedFace] = useState<AssetVariant>(faceVariants[0]);
    const [selectedAcc, setSelectedAcc] = useState<AssetVariant>(null);
    const [selectedClothes, setSelectedClothes] = useState<AssetVariant>(null);
    const [selectedShoe, setSelectedShoe] = useState<AssetVariant>(null);

    return (
        <Box w='100px' h='120px'  >
            <Image src='../assets/ghost-basic-0.png' />
            { selectedFace && <Image src={selectedFace.src} alt='face' />}
            { selectedHat && <Image src={selectedHat.src} alt='hat' />}
            { selectedClothes && <Image src={selectedClothes.src} alt='clothes' />}
            { selectedShoe && <Image src={selectedShoe.src} alt='shoe' />}
            { selectedAcc && <Image src={selectedAcc.src} alt='acc' />}
        </Box>
    );
};

export default UserCharacter;