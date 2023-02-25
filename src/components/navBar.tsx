import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Flex,
  Button,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ConnectWallet } from '@thirdweb-dev/react';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}));

export default function NavBar() {
  const links = [
    {
      link: 'https://opensea.io/collection/fishtanknft',
      label: 'OpenSea',
    },
    {
      link: 'https://etherscan.io/address/0x2d0da0ff93b0ba6055a03aa03dfbbd9d1c3b88d4',
      label: 'Etherscan',
    },
  ];
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Button
      key={link.label}
      component="a"
      target="_blank"
      variant="subtle"
      href={link.link}
    >
      {link.label}
    </Button>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={20} pt={5} className="z-10">
      <Container>
        <Flex
          justify="space-between"
          align="center"
          direction="row"
          wrap="nowrap"
        >
          <img
            src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
            height={28}
          />
          <Group spacing={20}>{items}</Group>
          <ConnectWallet accentColor="black" />
        </Flex>
      </Container>
    </Header>
  );
}
