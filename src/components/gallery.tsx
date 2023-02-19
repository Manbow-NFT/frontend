import React from 'react';
import { Box, Image, SimpleGrid, Tabs } from '@mantine/core';

const Gallery = () => {
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
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
            <div>
              <Image src="/img/sunfish0.jpg" />
            </div>
          </SimpleGrid>
        </Tabs.Panel>

        <Tabs.Panel value="messages" pt="xs">
          Messages tab content
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xs">
          Settings tab content
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
};

export default Gallery;
