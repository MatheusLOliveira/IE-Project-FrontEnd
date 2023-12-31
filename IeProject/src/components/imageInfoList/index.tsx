import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {
  DATA_LIST,
  IDADE_LIST,
  PACIENTE_LIST,
  RAIOX_LIST,
  TITULO_DIAGNOSTICO,
} from '../../resources/values/strings';

interface ImageInfoListProps {
  data: any;
}

const ImageInfoList = (props: ImageInfoListProps) => {
  return (
    <View style={styles.containerList}>
      <Text>{`${RAIOX_LIST} ${props.data.username}`}</Text>
      <Text>{`${DATA_LIST} ${props.data.date}`}</Text>
      <Text>{`${PACIENTE_LIST} ${props.data.name}`}</Text>
      <Text>{`${IDADE_LIST} ${props.data.age}`}</Text>
      <Text style={styles.titleList} numberOfLines={1}>
        {`${TITULO_DIAGNOSTICO} ${props.data.result}`}
      </Text>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{uri: `data:image/png;base64,${props.data.image}`}}
        />
      </View>
    </View>
  );
};

export default ImageInfoList;
