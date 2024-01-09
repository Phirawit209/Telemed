import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View } from "react-native";

// Formik
import { Formik } from "formik";

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea
} from './../components/styles';

const Login = () => {
    return (
        <StyledContainer>
          <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/images/skinlogo.png')} /> 
                <PageTitle> ระบบบริการรักษาทางไกล - Telemedicine {'\n'}
                โรงพยาบาลโรคผิวหนังเขตร้อนภาคใต้ จังหวัดตรัง </PageTitle>
                <SubTitle> เข้าสู่ระบบ </SubTitle>

                <Formik
                    initialValues={{username:'', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) =><StyledFormArea></StyledFormArea>}
                </Formik>
                    </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({label1, icon, ...props}) => {
    return (
        <View>
            
        </View>
    )
}

export default Login;