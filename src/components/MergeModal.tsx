import {
  Text,
  Card,
  Image,
  Tabs,
  Flex,
  Button,
  Modal,
  NumberInput,
  Center,
  Container,
} from '@mantine/core';
import { useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';
import { CONTRACT_ADDRESS } from '../constants/constants';

const NORMAL_TO_SILVER = 20;

interface Props {
  opened: boolean;
  close: () => void;
}

const MergeModal = (props: Props) => {
  const { contract } = useContract(CONTRACT_ADDRESS, 'edition-drop');
  const address = useAddress();
  const { data: nfts } = useOwnedNFTs(contract, address);

  const [normalForSilver, setNormalForSilver] = useState(0);
  const [silverForNormal, setSilverForNormal] = useState(0);
  const initialNormalForSilver =
    nfts?.find((nft) => nft.metadata.id == '0')?.quantityOwned || 0;

  useEffect(() => {
    setNormalForSilver(
      initialNormalForSilver - silverForNormal * NORMAL_TO_SILVER
    );
  }, [initialNormalForSilver, silverForNormal]);

  return (
    <Modal opened={props.opened} onClose={props.close} title="Merge Manbows">
      <Tabs variant="outline" defaultValue="Normal">
        <Tabs.List>
          <Tabs.Tab value="Normal">Normal → Silver</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Normal">
          <Flex direction="row" justify="center" align="center" gap="md">
            <Container size="sm" m="sm" p="sm">
              <Image src={`/img/sunfish0.jpg`} height={100} width={100} />
              <Text mt="md">{normalForSilver}</Text>
            </Container>
            <Text>{'→'}</Text>
            <Container size="sm" m="sm" p="sm">
              <Image src={`/img/sunfish2.jpg`} height={100} width={100} />
              <NumberInput
                mt="md"
                size="sm"
                defaultValue={0}
                min={0}
                value={silverForNormal}
                max={Math.floor(normalForSilver / NORMAL_TO_SILVER)}
                onChange={(val) => {
                  setSilverForNormal(val || 0);
                }}
              />
            </Container>
          </Flex>
          <Center>
            <Button
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan' }}
              mr={40}
              disabled={silverForNormal == 0}
              fz="xl"
              h={45}
              w={150}
            >
              Merge
            </Button>
          </Center>
        </Tabs.Panel>
      </Tabs>
    </Modal>
  );
};

export default MergeModal;
