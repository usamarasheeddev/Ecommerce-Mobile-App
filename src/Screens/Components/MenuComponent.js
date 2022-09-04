import React from 'react';
import { Menu, Box ,Pressable,Button} from 'native-base';

export default function MenuComponent() {
  return <Box w="80%" alignItems="center">
  <Menu shadow={2} w="190" trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <Button  />
            </Pressable>;
    }}>
        <Menu.Item>Arial</Menu.Item>
        <Menu.Item>Nunito Sans</Menu.Item>
        <Menu.Item>Roboto</Menu.Item>
        <Menu.Item>Poppins</Menu.Item>
        
      </Menu>
  </Box>;
}