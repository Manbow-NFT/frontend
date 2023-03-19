import { useDisclosure } from '@mantine/hooks';
import {
  Box,
  Text,
  Card,
  Image,
  SimpleGrid,
  Tabs,
  Flex,
  Button,
} from '@mantine/core';
import { useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
import { CONTRACT_ADDRESS } from '../constants/constants';
import MergeModal from './MergeModal';

interface nftItem {
  id: number;
  tokenId: number;
}

const Gallery = () => {
  const { contract } = useContract(CONTRACT_ADDRESS, 'edition-drop');
  const address = useAddress();
  const { data: nfts } = useOwnedNFTs(contract, address);
  const [opened, { open, close }] = useDisclosure(false);

  const nftItems: nftItem[] = [];
  nfts?.map((ownedNft) => {
    if (ownedNft.quantityOwned != null) {
      for (let i = 0; i < Number(ownedNft.quantityOwned); i++) {
        nftItems.push({ id: i, tokenId: Number(ownedNft.metadata.id) });
      }
    }
  });
  const nftAliveItems = nftItems?.filter((nft) => nft.tokenId % 2 == 0);
  const nftDeadItems = nftItems?.filter((nft) => nft.tokenId % 2 == 1);

  return (
    <>
      <MergeModal opened={opened} close={close} />
      <Box
        sx={{
          paddingInline: 20,
          paddingBlock: 10,
        }}
      >
        <Flex direction="row" justify="flex-end">
          <Button
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan' }}
            onClick={open}
            mr={50}
            w={130}
            h={45}
            fz="xl"
          >
            Merge
          </Button>
        </Flex>
        <Tabs defaultValue="all" variant="pills">
          <Tabs.List>
            <Tabs.Tab
              value="all"
              rightSection={<Text fz="sm">{nftItems?.length || 0}</Text>}
            >
              All
            </Tabs.Tab>
            <Tabs.Tab
              value="alive"
              rightSection={<Text fz="sm">{nftAliveItems?.length || 0}</Text>}
            >
              Alive
            </Tabs.Tab>
            <Tabs.Tab
              value="dead"
              disabled={!nftDeadItems}
              rightSection={<Text fz="sm">{nftDeadItems?.length || 0}</Text>}
            >
              Dead
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="all" pt="xs">
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
                <div key={nft.id}>
                  <Card shadow="sm" p="md" withBorder>
                    <Card.Section>
                      <Image src={`/img/sunfish${nft.tokenId}.jpg`} />
                    </Card.Section>
                  </Card>
                </div>
              ))}
            </SimpleGrid>
          </Tabs.Panel>

          <Tabs.Panel value="alive" pt="xs">
            <SimpleGrid
              cols={10}
              breakpoints={[
                { maxWidth: 'lg', cols: 8 },
                { maxWidth: 'md', cols: 6 },
                { maxWidth: 'sm', cols: 5 },
                { maxWidth: 'xs', cols: 4 },
              ]}
            >
              {nftAliveItems.map((nft) => (
                <div key={nft.id}>
                  <Card shadow="sm" p="md" withBorder>
                    <Card.Section>
                      <Image src={`/img/sunfish${nft.tokenId}.jpg`} />
                    </Card.Section>
                  </Card>
                </div>
              ))}
            </SimpleGrid>
          </Tabs.Panel>

          <Tabs.Panel value="dead" pt="xs">
            <SimpleGrid
              cols={10}
              breakpoints={[
                { maxWidth: 'lg', cols: 8 },
                { maxWidth: 'md', cols: 6 },
                { maxWidth: 'sm', cols: 5 },
                { maxWidth: 'xs', cols: 4 },
              ]}
            >
              {nftDeadItems.map((nft) => (
                <div key={nft.id}>
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
    </>
  );
};

export default Gallery;
