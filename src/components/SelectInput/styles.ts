import SelectDropdown from 'react-native-select-dropdown';
import styled from 'styled-components/native';

export const SelectDropdownContainer = styled.View`
  margin-top: 6px;
`;

export const SelectStyled = styled(SelectDropdown).attrs(props => ({
  dropdownIconPosition: 'right',
  buttonStyle: {
    width: '100%',
    backgroundColor: props.theme.COLORS.WHITE,
    borderRadius: 10,
  },
  buttonTextStyle: {
    textAlign: 'left',
    color: props.theme.COLORS.FONT_PRIMARY,
    fontWeight: '400',
    lineHeight: 22,
    fontSize: 15,
  },
  dropdownStyle: {
    backgroundColor: props.theme.COLORS.WHITE,
    borderRadius: 14,
  },
  rowStyle: {
    backgroundColor: props.theme.COLORS.WHITE,
    borderBottomColor: '#f1f1f1',
  },
  rowTextStyle: {
    color: props.theme.COLORS.FONT_PRIMARY,
    textAlign: 'left',
    marginLeft: 20,
    fontSize: 15,
  },
}))``;
