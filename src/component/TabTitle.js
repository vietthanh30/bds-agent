import React, {
  PropTypes,
} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const TabTitle = (props) => (
  <View style={{
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  }}>
    <Image source={props.selected ? props.icActive : props.ic } style={{ width: 32, height: 32 }}/>
    <Text style={{ color: props.selected ? '#00a8e6' : '#7b8b91', fontSize: 12 }}>
      {props.title}
    </Text>
  </View>
);

TabTitle.propTypes = propTypes;

export default TabTitle;
