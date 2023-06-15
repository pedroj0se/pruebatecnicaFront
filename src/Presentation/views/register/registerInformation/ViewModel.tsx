import React, { useState, useEffect, useContext } from 'react'
import { Api } from '../../../../Data/sources/remote/api/Api';
import { RegisterAuthUseCase } from '../../../../Domain/useCases/user/RegisterAut';
import { SaveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/SaveUserLocal';
import { GetUserLocalUseCase } from '../../../../Domain/useCases/userLocal/GetUserLocal';
import { useUserLocal } from '../../../hooks/useUserLocal';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { UserContext } from '../../../context/UserContext';
import { Alert } from 'react-native';

const RegisterViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        usuario: '',
        rol: 'CLIENTE',
        password: '',
        confirmPassword: '',
    });



    const { user, saveUserSession } = useContext( UserContext );
        // const { user, saveUserSession } = useContext( UserContext );
    const [loading, setLoading] = useState(false);
    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    // const register = async () => {
    //     if (isValidForm()) {
    //         setLoading(true);
    //         const response = await RegisterAuthUseCase(values);
    //         setLoading(false);
    //         console.log('RESULT: ' + JSON.stringify(response));        
    //         if (!response.success) {
    //             alert(response.message);
    //         }
    //         else {
    //             saveUserSession(response.data);
    //         }
    //     }
    // }

    const register = async () => {
        try {
            if (isValidForm()) {
                setLoading(true);
                const response = await RegisterAuthUseCase(values);
                setLoading(false);
                console.log('RESULT: ' + JSON.stringify(response));        
                if (!response.success) {
                    alert(response.message);
                }
                else {
                    saveUserSession(response.data);
                }
            }
            // navigation.navigate('RegisterCompletedScreen'); // navigate to the welcome screen
        } catch (error) {
            alert(`Error : ${error}`); // show the error.
        }
    }

    const isValidForm = (): boolean => {
        if (values.usuario === '') {
            setErrorMessage('Ingresa tu nombre');
            return false;
        }
        if (values.password === '') {
            setErrorMessage('Ingresa tu correo electronico');
            return false;
        }
        if (values.confirmPassword === '') {
            setErrorMessage('Ingresa tu telefono');
            return false;
        }
        if (values.password !== values.confirmPassword) {
            setErrorMessage('Las contraseñas no coinciden');
            return false;
        }

        return true;
    }

    return {
        ...values,
        register,
        errorMessage,
        loading,
        user,
        onChange
    }
}

export default RegisterViewModel;