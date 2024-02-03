/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ClassView from './src/components/ClassView';
import FunctionView from './src/components/FunctionView';
import ViewDemo from './src/components/ViewDemo';
import TextDemo from './src/components/TextDemo';
import ImageDemo from './src/components/ImageDemo';
import ImageBackgroundDemo from './src/components/ImageBackgroundDemo';
import TextInputDemo from './src/components/TextInputDemo';
import TouchableOpacityDemo from './src/components/TouchableOpacityDemo';
import TouchableHighlightDemo from './src/components/TouchableHighlightDemo';
import TouchableWithoutFeedbackDemo from './src/components/TouchableWithoutFeedbackDemo';
import ButtonDemo from './src/components/ButtonDemo';
import PressableDemo from './src/components/PressableDemo';
import ScrollViewDemo from './src/components/ScrollViewDemo';
import FlatListDemo from './src/components/FlatListDemo';
import SectionListDemo from './src/components/SectionListDemo';
import ModalDemo from './src/components/ModalDemo';
import SwitchDemo from './src/components/SwitchDemo';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// function Section({ children, title }: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }





// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });


function App(): React.JSX.Element {




  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        {/* <TouchableOpacityDemo></TouchableOpacityDemo> */}
        {/* <TouchableHighlightDemo></TouchableHighlightDemo> */}
        {/* <TouchableWithoutFeedbackDemo></TouchableWithoutFeedbackDemo> */}
        {/* <ButtonDemo></ButtonDemo> */}
        {/* <PressableDemo></PressableDemo> */}
        {/* <ScrollViewDemo></ScrollViewDemo> */}
        {/* <FlatListDemo></FlatListDemo> */}
        {/* <SectionListDemo></SectionListDemo> */}
        {/* <ModalDemo></ModalDemo> */}
        <SwitchDemo></SwitchDemo>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

export default App;
