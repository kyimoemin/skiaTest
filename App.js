/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {Canvas, Circle, Group, Skia} from '@shopify/react-native-skia';
import React, {useState} from 'react';
import {Button, SafeAreaView, ScrollView, Text} from 'react-native';

const hexPath = Skia.Path.MakeFromSVGString(
  'M89.526 30.456c0-3.898-2.08-7.502-5.457-9.45L50.22 1.46a10.92 10.92 0 0 0-10.914 0L5.457 21.005A10.912 10.912 0 0 0 0 30.456v39.087c0 3.898 2.081 7.502 5.458 9.452l33.85 19.542a10.91 10.91 0 0 0 10.913 0l33.848-19.542a10.918 10.918 0 0 0 5.457-9.452V30.456z',
);

const star = Skia.Path.MakeFromSVGString(
  'M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z',
);

const path = Skia.Path.Make();
path.moveTo(128, 0);
path.lineTo(168, 80);
path.lineTo(256, 93);
path.lineTo(192, 155);
path.lineTo(207, 244);
path.lineTo(128, 202);
path.lineTo(49, 244);
path.lineTo(64, 155);
path.lineTo(0, 93);
path.lineTo(88, 80);
path.lineTo(128, 0);
path.close();

const App = () => {
  const size = 256;
  const r = size * 0.33;
  const [state, setState] = useState(1);

  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: 'gray'}}>
        <Canvas style={{height: 300, width: 300}}>
          <Group blendMode="multiply" clip={path}>
            <Circle cx={r} cy={r} r={r} color="cyan" />
            <Circle cx={size - r} cy={r} r={r} color="magenta" />
            <Circle cx={size / 2} cy={size - r} r={r} color="yellow" />
          </Group>
        </Canvas>
        <Text>number :{state}</Text>
        <Button onPress={() => setState(n => n + 1)} title="increase" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
