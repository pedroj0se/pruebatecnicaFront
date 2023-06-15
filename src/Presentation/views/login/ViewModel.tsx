import React, { useState, useEffect, useContext } from 'react'
import { LoginAuthUseCase } from '../../../Domain/useCases/user/LoginAuth';
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';
import { GetUserLocalUseCase } from '../../../Domain/useCases/userLocal/GetUserLocal';
import { useUserLocal } from '../../hooks/useUserLocal';
import { UserContext } from '../../context/UserContext';

const LoginViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        usuario: '',
        password: '',
    });
    // const { user } = useUserLocal();
    const { user, saveUserSession } = useContext( UserContext );
    console.log('USUARIO EN SESION: ' + JSON.stringify(user));

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }


    const login = async () => {
        if (isValidForm()) {
            const response = await LoginAuthUseCase(values.usuario, values.password);
            console.log('RESULT: ' + JSON.stringify(response));
            if (!response.success) {
                alert(response.message);
            }
            else {
                saveUserSession(response.data);
            }
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
        

        return true;
    }

    return {
        ...values,
        login,
        user,
        errorMessage,
        onChange
    }
}

export default LoginViewModel;
