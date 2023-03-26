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
import {
  useAddress,
  useContract,
  useContractWrite,
  useOwnedNFTs,
} from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';
import { CONTRACT_ADDRESS } from '../constants/constants';
import { useMutation } from '@tanstack/react-query';
import { showNotification } from '@mantine/notifications';

const NORMAL_TO_SILVER = 20;

interface Props {
  opened: boolean;
  close: () => void;
}

const MergeModal = (props: Props) => {
  const { contract } = useContract(CONTRACT_ADDRESS, 'edition-drop');
  const address = useAddress();
  const { data: nfts } = useOwnedNFTs(contract, address);
  const { mutateAsync: merge } = useContractWrite(contract, 'merge');
  const mutation = useMutation(
    async () => {
      if (!contract || !address) {
        throw new Error('something went wrong');
      }
      await merge([address, 0, 2, silverForNormal]);
    },
    {
      onSuccess: (res) => {
        showNotification({
          title: 'Successfully merged!',
          message: 'You successfully merged the Manbow NFTs.',
          color: 'blue',
          autoClose: 5000,
        });
      },
      onError: (err) => {
        console.error(err);
        showNotification({
          title: 'Failed to merge',
          message: 'you failed to merge. Something went wrong.',
          color: 'red',
          autoClose: 9000,
        });
      },
    }
  );

  const [normalForSilver, setNormalForSilver] = useState(0);
  const [silverForNormal, setSilverForNormal] = useState(0);
  const initialNormalForSilver =
    Number(nfts?.find((nft) => nft.metadata.id == '0')?.quantityOwned) || 0;

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
            <Container size="sm" m="sm" p="sm">
              <Image src={`/img/sunfish2.jpg`} height={100} width={100} />
              <NumberInput
                mt="md"
                size="sm"
                defaultValue={0}
                min={0}
                value={silverForNormal}
                max={Math.floor(initialNormalForSilver / NORMAL_TO_SILVER)}
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
              disabled={silverForNormal == 0}
              onClick={() => mutation.mutate()}
              loading={mutation.isLoading || !contract}
              fz="xl"
              mr={40}
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
