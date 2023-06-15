import { UserAuthRepositoryImpl } from "../../../Data/repositories/UserAuthRepository";
import { User } from "../../entities/User";

const { register } = new UserAuthRepositoryImpl();

export const RegisterAuthUseCase = async (user: User) => {
    return await register(user);
}