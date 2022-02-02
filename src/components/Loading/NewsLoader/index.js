import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
import React from 'react';
import {View, Platform} from 'react-native';
import styles from './style';
import spacing from '../../../constants/spacing';

export default (NewsLoader = () => {
  return (
    <View style={styles.container}>
      <Placeholder
        Animation={Fade}
        //Right={PlaceholderMedia}
        Right={props => <PlaceholderMedia style={styles.mediaStyle} />}
        style={styles.media}>
        <View style={styles.view}>
          <PlaceholderLine style={styles.line} />
          <PlaceholderLine style={styles.line} />
          <PlaceholderLine style={styles.line} />
        </View>
      </Placeholder>
      <Placeholder style={styles.lines} Animation={Fade}>
        <PlaceholderLine style={styles.line} />
        <PlaceholderLine style={styles.line} />
        <PlaceholderLine
          style={styles.time}
          width={Platform.OS === 'ios' ? '50%' : 50}
        />
      </Placeholder>
      <Placeholder
        Animation={Fade}
        //Right={PlaceholderMedia}
        Right={props => <PlaceholderMedia style={styles.mediaStyle} />}
        style={styles.media}>
        <View style={styles.view}>
          <PlaceholderLine style={styles.line} />
          <PlaceholderLine style={styles.line} />
          <PlaceholderLine style={styles.line} />
        </View>
      </Placeholder>
      <Placeholder style={styles.lines} Animation={Fade}>
        <PlaceholderLine style={styles.line} />
        <PlaceholderLine style={styles.line} />
        <PlaceholderLine
          style={styles.time}
          width={Platform.OS === 'ios' ? '50%' : 50}
        />
      </Placeholder>
      <Placeholder
        Animation={Fade}
        //Right={PlaceholderMedia}
        Right={props => <PlaceholderMedia style={styles.mediaStyle} />}
        style={styles.media}>
        <View style={styles.view}>
          <PlaceholderLine style={styles.line} />
          <PlaceholderLine style={styles.line} />
          <PlaceholderLine style={styles.line} />
        </View>
      </Placeholder>
      <Placeholder style={styles.lines} Animation={Fade}>
        <PlaceholderLine style={styles.line} />
        <PlaceholderLine style={styles.line} />
        <PlaceholderLine
          style={styles.time}
          width={Platform.OS === 'ios' ? '50%' : 50}
        />
      </Placeholder>
      <Placeholder
        Animation={Fade}
        //Right={PlaceholderMedia}
        Right={props => <PlaceholderMedia style={styles.mediaStyle} />}
        style={styles.media}>
        <View style={styles.view}>
          <PlaceholderLine style={styles.line} />
          <PlaceholderLine style={styles.line} />
          <PlaceholderLine style={styles.line} />
        </View>
      </Placeholder>
      <Placeholder style={styles.lines} Animation={Fade}>
        <PlaceholderLine style={styles.line} />
        <PlaceholderLine style={styles.line} />
        <PlaceholderLine
          style={styles.time}
          width={Platform.OS === 'ios' ? '50%' : 50}
        />
      </Placeholder>
      <Placeholder
        Animation={Fade}
        //Right={PlaceholderMedia}
        Right={props => <PlaceholderMedia style={styles.mediaStyle} />}
        style={styles.media}>
        <View style={styles.view}>
          <PlaceholderLine style={styles.line} />
          <PlaceholderLine style={styles.line} />
          <PlaceholderLine style={styles.line} />
        </View>
      </Placeholder>
      <Placeholder style={styles.lines} Animation={Fade}>
        <PlaceholderLine style={styles.line} />
        <PlaceholderLine style={styles.line} />
        <PlaceholderLine
          style={styles.time}
          width={Platform.OS === 'ios' ? '50%' : 50}
        />
      </Placeholder>
    </View>
  );
});
