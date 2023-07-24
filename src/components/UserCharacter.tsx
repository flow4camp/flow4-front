import React, { useState } from "react";
import { Box, Image, } from '@chakra-ui/react';
import './UserCharacter.scss';

// Asset 데이터
type AssetVariant = {
    id: number;
    src: string;
} | null ;      // nullable

const hatVariants: AssetVariant[] = [
    { id: 0, src: require('../assets/hat-hiphop-hat.png') },
];

const faceVariants: AssetVariant[] = [
    { id: 0, src: require("../assets/face-basic.png") },
];

const accVariants: AssetVariant[] = [
    { id: 0, src: require('../assets/acc-gold-necklace.png') },
];

const clothesVariants: AssetVariant[] = [
    { id: 0, src: require('../assets/clothes-blue-skirt.png') },
];

const shoeVariants: AssetVariant[] = [
    { id: 0, src: require('../assets/shoe-crocs.png') },
];

const UserCharacter = () => {
    const [selectedHat, setSelectedHat] = useState<AssetVariant>(null);
    const [selectedFace, setSelectedFace] = useState<AssetVariant>(faceVariants[0]);
    const [selectedAcc, setSelectedAcc] = useState<AssetVariant>(null);
    const [selectedClothes, setSelectedClothes] = useState<AssetVariant>(null);
    const [selectedShoe, setSelectedShoe] = useState<AssetVariant>(null);

    return (
        <Box w='180px' h='220px' position='relative' m={3} className="character-container" >
            <Image src={require('../assets/ghost-basic-0.png')} />
            { selectedFace && <Image src={selectedFace.src} alt='face' position='absolute' top='0' left='0' />}
            { selectedHat && <Image src={selectedHat.src} alt='hat' position='absolute' top='0' left='0' />}
            { selectedClothes && <Image src={selectedClothes.src} alt='clothes' position='absolute' top='0' left='0' />}
            { selectedShoe && <Image src={selectedShoe.src} alt='shoe' position='absolute' top='0' left='0' />}
            { selectedAcc && <Image src={selectedAcc.src} alt='acc' position='absolute' top='0' left='0' />}
        </Box>
    );
};

export default UserCharacter;