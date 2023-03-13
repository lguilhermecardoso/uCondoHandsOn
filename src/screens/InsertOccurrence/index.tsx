import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Content} from '../../components/Content';
import {Header} from '../../components/Header';
import {SelectInput} from '../../components/SelectInput';
import {useOccurrencies} from '../../contexts/occurrenciesContext';
import Snackbar from 'react-native-snackbar';

import * as S from './styles';
export function InsertOccurrence() {
  const navigator = useNavigation();
  const {occurrencies, setOccurrencies} = useOccurrencies();
  const [name, setName] = useState('');
  const [selectedParent, setSelectedParent] = useState({});
  const [type, setType] = useState('');
  const [occurrency, setOccurrency] = useState(false);
  const [code, setCode] = useState(() => {
    let stored = occurrencies.length + 1;
    return stored.toString();
  });

  const [parents, setParents] = useState([]);

  function handleTypeChange(value) {
    setType(value.toLowerCase());
  }
  function handleOcurrencyChange(value) {
    if (value === 'Sim') {
      setOccurrency(true);
    } else {
      setOccurrency(false);
    }
  }

  function handleParentChange(value) {
    const filtredParents = occurrencies.filter(oc => oc.code === value[0]);
    let tempCode = `${value[0]}.${filtredParents[0].childrens.length + 1}`;
    let alreadyExists = false;
    function verifyExists() {
      alreadyExists = filtredParents[0].childrens.find(
        chld => chld.code === tempCode,
      );
    }
    if (!alreadyExists) {
      setCode(tempCode);
      setSelectedParent(filtredParents);
    } else {
      tempCode = `${value[0]}.${filtredParents[0].childrens.length++}`;
      verifyExists();
    }
  }

  function handleSave() {
    if (!occurrency) {
      // verifica se vai aceitar lancamentos ou não
      const newOccurrency = {
        code: code,
        name: name,
        occurrency: occurrency,
        childrens: [],
      };
      setOccurrencies([...occurrencies, newOccurrency]);
      Snackbar.show({
        text: 'Conta cadastrada com sucesso',
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          text: 'OK',
          textColor: 'green',
          onPress: () => navigator.goBack(),
        },
      });
      setTimeout(() => {
        navigator.goBack();
      }, 3000);
    } else {
      const newChildren = {
        code: code,
        name: name,
        occurrency: occurrency,
      };
      let parent = occurrencies.filter(
        oc => oc.code === selectedParent[0].code,
      );
      parent[0].childrens.push(newChildren);
      let tempOccurrencies = occurrencies.filter(
        oc => oc.code !== parent[0].code,
      );
      tempOccurrencies.push(parent[0]);
      setOccurrencies(tempOccurrencies);
      Snackbar.show({
        text: 'Conta cadastrada com sucesso',
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          text: 'OK',
          textColor: 'green',
          onPress: () => navigator.goBack(),
        },
      });
      setTimeout(() => {
        navigator.goBack();
      }, 3000);
    }
  }

  useEffect(() => {
    function getParents() {
      let tempParents = [];
      occurrencies.forEach(occurency => {
        console.log(occurency);
        tempParents.push(`${occurency.code} - ${occurency.name}`);
      });
      setParents(tempParents);
    }

    getParents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header title="Inserir Conta" showBackButton onSave={handleSave} />
      <Content>
        <S.Container>
          <S.Content>
            <S.Label>Conta pai</S.Label>
            <SelectInput
              handleChange={handleParentChange}
              list={parents}
              defaultText="Selecione a conta pai"
            />
            <S.Label>Código</S.Label>
            <S.OccurrenceInput
              value={code}
              onChangeText={setCode}
              placeholder="Insira o código"
            />
            <S.Label>Nome</S.Label>
            <S.OccurrenceInput
              value={name}
              onChangeText={setName}
              placeholder="Insira o nome"
            />
            <S.Label>Tipo</S.Label>
            <SelectInput
              handleChange={handleTypeChange}
              defaultText="Selecione o Tipo"
              list={['Receita', 'Despesa']}
            />
            <S.Label>Aceita lancamentos</S.Label>
            <SelectInput
              handleChange={handleOcurrencyChange}
              defaultText="Aceita lancamentos"
              list={['Sim', 'Não']}
            />
          </S.Content>
        </S.Container>
      </Content>
    </>
  );
}
