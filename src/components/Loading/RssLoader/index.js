import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
import React from 'react';
import {View} from 'react-native';
import styles from './style';

export default (NewsLoader = () => {
  return (
    <View style={styles.container}>
      <Placeholder
        Animation={Fade}
        Left={props => <PlaceholderMedia style={styles.mediaStyle} />}>
        <PlaceholderLine height={16} />
        <PlaceholderLine height={8} />
        <PlaceholderLine height={8} />
        <View style={styles.foot}>
          <PlaceholderLine width={25} height={8} />
          <PlaceholderLine width={25} height={8} />
        </View>
      </Placeholder>
    </View>
  );
});
