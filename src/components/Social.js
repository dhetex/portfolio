import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaCode, FaDatabase, FaPhp, FaCpanel } from 'react-icons/fa'

function Social() {
    return (
        <HStack spacing="24">
            <Icon as={FaCode} boxSize="24" />
            <Icon as={FaCpanel} boxSize="24" />
            <Icon as={FaDatabase} boxSize="24" />
            <Icon as={FaPhp} boxSize="24" />
           
        </HStack>
    )
}

export default Social
