import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import Property from '../components/Property';
import SearchFilters from '../components/SearchFilters';
import NoResult from '../Assets/images/noresult.svg';

const Search = ( properties) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return(
        <Box>
            <Flex
                cursor="pointer"
                bg="gray.100"
                borderBottom="1px"
                borderColor="gray.200"
                p="2"
                fontWeight="black"
                fontSize="lg"
                justifyContent="center"
                alignItems="center"
                onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
            >
            <Text>
                Search Property by Filters
            </Text>
            <Icon paddingLeft="2" w="7" as={BsFilter} />
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text fontSize="2xl" p="4" fontWeight="bold">
                Properties {router.query.purpose}
            </Text>
            <Flex flexWrap='wrap'>
                {properties.map((property) => <Property property = {property} key={property.id}/>)}

            </Flex>
            {properties.length === 0 && (
                <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
                    <Image alt='no-result' src={NoResult} />
                    <Text fontSize="2xl" marginTop="3">No Result Found</Text>
                </Flex>
            )} 

        </Box>
    )
}

export default Search;

export async function getStaticProps({ query }){
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';

    return{
        props: {
            propertiesForSale: propertyForSale?.hits,
        }
    }
}