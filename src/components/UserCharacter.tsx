import React, { useState } from "react";
import { Box, Image, } from '@chakra-ui/react';
import './UserCharacter.scss';
import { hatVariants, faceVariants, accVariants, clothesVariants, shoeVariants } from "./AssetVariants";

// Asset 데이터
type AssetVariant = {
    id: number;
    src: string;
} | null ;      // nullable

type UserCharacterProps = {
    usage: string;
    selectedHat: AssetVariant;
    selectedAcc: AssetVariant;
    selectedFace: AssetVariant;
    selectedClothes: AssetVariant;
    selectedShoe: AssetVariant;
}

const UserCharacter: React.FC<UserCharacterProps> = ({ usage, selectedHat, selectedAcc, selectedFace, selectedClothes, selectedShoe }) => {
    // const [selectedHat, setSelectedHat] = useState<AssetVariant>(null);
    // const [selectedFace, setSelectedFace] = useState<AssetVariant>(faceVariants[0]);
    // const [selectedAcc, setSelectedAcc] = useState<AssetVariant>(null);
    // const [selectedClothes, setSelectedClothes] = useState<AssetVariant>(null);
    // const [selectedShoe, setSelectedShoe] = useState<AssetVariant>(null);

    return (
        <Box position='relative' m={3} 
            className={`character-container ${usage === "edit" ? 'edit' : ''} 
                ${usage === "profile" ? 'profile' : ''}
                ${usage === "attacked" ? 'attacked' : ''} 
                ${usage === "defended" ? 'defended' : ''}
            `} 
        >
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