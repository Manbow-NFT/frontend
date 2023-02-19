import React from 'react';
import { Box, Card, Image, SimpleGrid, Tabs } from '@mantine/core';
import { useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
import { CONTRACT_ADDRESS } from '../constants/constants';

interface nftItem {
  tokenId: number;
}

const Gallery = () => {
  const { contract } = useContract(CONTRACT_ADDRESS, 'edition-drop');
  const address = useAddress();
  const { data: ownedNFTs } = useOwnedNFTs(contract, address);
  const nftItems: nftItem[] = [];
  ownedNFTs?.map((ownedNft, idx) => {
    if (ownedNft.quantityOwned != null) {
      for (let i = 0; i < ownedNft.quantityOwned; i++) {
        nftItems.push({ tokenId: idx });
      }
    }
  });

  return (
    <Box
      sx={{
        paddingInline: 20,
        paddingBlock: 10,
      }}
    >
      <Tabs defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
          <Tabs.Tab value="messages">Messages</Tabs.Tab>
          <Tabs.Tab value="settings">Settings</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery" pt="xs">
          <SimpleGrid
            cols={10}
            breakpoints={[
              { maxWidth: 'lg', cols: 8 },
              { maxWidth: 'md', cols: 6 },
              { maxWidth: 'sm', cols: 5 },
              { maxWidth: 'xs', cols: 4 },
            ]}
          >
            {nftItems?.map((nft) => (
              <div>
                <Card shadow="sm" p="md" withBorder>
                  <Card.Section>
                    <Image src={`/img/sunfish${nft.tokenId}.jpg`} />
                  </Card.Section>
                </Card>
              </div>
            ))}
          </SimpleGrid>
        </Tabs.Panel>

        <Tabs.Panel value="messages" pt="xs">
          <SimpleGrid
            cols={10}
            breakpoints={[
              { maxWidth: 'lg', cols: 8 },
              { maxWidth: 'md', cols: 6 },
              { maxWidth: 'sm', cols: 5 },
              { maxWidth: 'xs', cols: 4 },
            ]}
          >
            {nftItems
              ?.filter((nft) => nft.tokenId % 2 == 0)
              .map((nft) => (
                <div>
                  <Card shadow="sm" p="md" withBorder>
                    <Card.Section>
                      <Image src={`/img/sunfish${nft.tokenId}.jpg`} />
                    </Card.Section>
                  </Card>
                </div>
              ))}
          </SimpleGrid>
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xs">
          <SimpleGrid
            cols={10}
            breakpoints={[
              { maxWidth: 'lg', cols: 8 },
              { maxWidth: 'md', cols: 6 },
              { maxWidth: 'sm', cols: 5 },
              { maxWidth: 'xs', cols: 4 },
            ]}
          >
            {nftItems
              ?.filter((nft) => nft.tokenId % 2 == 1)
              .map((nft) => (
                <div>
                  <Card shadow="sm" p="md" withBorder>
                    <Card.Section>
                      <Image src={`/img/sunfish${nft.tokenId}.jpg`} />
                    </Card.Section>
                  </Card>
                </div>
              ))}
          </SimpleGrid>
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
};

export default Gallery;
