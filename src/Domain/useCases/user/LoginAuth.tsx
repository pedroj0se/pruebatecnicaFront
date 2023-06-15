import { UserAuthRepositoryImpl } from "../../../Data/repositories/UserAuthRepository";

const { login } = new UserAuthRepositoryImpl();

export const LoginAuthUseCase = async (usuario: string, password: string) => {
    return await login(usuario, password);
}