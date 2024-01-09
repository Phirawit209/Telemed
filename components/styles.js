import styled  from 'styled-components';
import Constants from 'expo-constants';
import {View,
        Text, 
        TextInput, 
        Image, 
        TouchableOpacity, 
} from 'react-native';

const StatusBarHeight = Constants.statusBarHeight;

// Colors
export const Colors = {
    primary: '#ffffff',
    secondary: '#E5E7E8',
    tertiary: '##1F2937',
    darklight: '#9CA3AF',
    brand: '#6D28D9',
    green: '#10B981',
    red: '#EF4444'
};

const { primary, secondary, tertiary, darklight, brand, green, red} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};    
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;   
`;

export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;   
`;

export const PageTitle = styled.Text`
    font-size: 12px;
    text-align: center;  
    font-weight: bold;
    color: ${brand};
    padding: 10px; 
`;

export const SubTitle = styled.Text`
    font-size: 16px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
   background-color: ${secondary};
   padding: 15px;
   padding-left: 55px;
   padding-right: 55px;
   border-radius: 5px;
   font-size: 16px;
   height: 60px;
   margin-verticcal: 3px;
   margin-bottom: 10px;
   color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    posittion: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    left: 15px;
    top: 38px;
    posittion: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    border-radius: 5px;
    
`

