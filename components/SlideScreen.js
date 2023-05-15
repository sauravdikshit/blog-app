import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const SlideScreen = ({ label }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{label}</Text>
    </View>
  );
};

SlideScreen.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SlideScreen;
