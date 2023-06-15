import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { UserAuthRepository } from "../../Domain/repositories/UserAuthRepository";
import { Api, ApiForImage } from "../sources/remote/api/Api";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";


export class UserAuthRepositoryImpl implements UserAuthRepository {

    async register(user: User): Promise<ResponseApiDelivery> {
        try {
            
            const response = await Api.post<ResponseApiDelivery>('/users/create', user);
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError)
        }
    }

    
    async login(usuario: string, password: string): Promise<ResponseApiDelivery> {
        try {
            
            const response = await Api.post<ResponseApiDelivery>('/users/login', {
                usuario: usuario,
                password: password                
            });
            
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError)
        }
    }

}