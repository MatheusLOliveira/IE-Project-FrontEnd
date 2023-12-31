import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {
  RAIOX_INSERT_IMAGE_INFO,
  DATA_INSERT_IMAGE_INFO,
  PACIENTE_INSERT_IMAGE_INFO,
  IDADE_INSERT_IMAGE_INFO,
} from '../../../../resources/values/strings';
import InputInsertComponent from '../../components/inputComponent';

interface InsertImageInfoProps {
  raioxName: String;
  date: String;
  patient: String;
  age: String;
  setRaioxName: any;
  setDate: any;
  setPatient: any;
  setAge: any;
}

const InsertImageInfo = (props: InsertImageInfoProps) => {

  return (
    <View style={styles.containerList}>
      <InputInsertComponent
        label={RAIOX_INSERT_IMAGE_INFO}
        placeholder="Digite o apelido do raio-x"
        type="default"
        secure={false}
        data={props.raioxName}
        setData={props.setRaioxName}
      />
      <InputInsertComponent
        label={DATA_INSERT_IMAGE_INFO}
        placeholder="Digite a data"
        type="phone-pad"
        secure={false}
        data={props.date}
        setData={props.setDate}
      />
      <InputInsertComponent
        label={PACIENTE_INSERT_IMAGE_INFO}
        placeholder="Digite a identificação do paciente"
        type="default"
        secure={false}
        data={props.patient}
        setData={props.setPatient}
      />
      <InputInsertComponent
        label={IDADE_INSERT_IMAGE_INFO}
        placeholder="Digite a idade"
        type="phone-pad"
        secure={false}
        data={props.age}
        setData={props.setAge}
      />
    </View>
  );
};

export default InsertImageInfo;
