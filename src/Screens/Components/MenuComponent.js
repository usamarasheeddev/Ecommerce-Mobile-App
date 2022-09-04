import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const MenuComponent = () => {
  const [visible, setVisible] = React.useState(true);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
          color: 'red', borderWidth: 1
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>} style={{color:'red'}}>
          <Menu.Item leadingIcon="redo" onPress={() => { }} title="Redo" />
          <Menu.Item onPress={() => { }} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => { }} title="Item 3" />
        </Menu>
      </View>
    </Provider>
  );
};

export default MenuComponent;