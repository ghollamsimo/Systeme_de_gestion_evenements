import { UserUseCase } from "../src/application/usecases/userUseCase";
import {LoginDTO} from "../src/core/dto/LoginDTO";
import {UserRepositoryImpl} from "../src/infrastructure/repositories/userRepositoryImpl";

jest.mock("../src/application/usecases/userUseCase");

describe("Authentication Tests", () => {
    let userUseCase: UserUseCase;
    beforeEach(() => {
        const authRepository = new UserRepositoryImpl();
        userUseCase = new UserUseCase(authRepository);
    })
    it("should call login method", () => {
        const login = jest.spyOn(userUseCase, "login");
        const loginDto: LoginDTO = {
            email: "user@example.com",
            password: "password"
        }
        userUseCase.login(loginDto)
        expect(login).toBeCalledTimes(1);
        expect(login).toBeCalledWith(loginDto);
    })
    it("should call register method", () => {
        const register = jest.spyOn(userUseCase, "register");
        const name: string = "Ghollam";
        const email: string = "ghollam@gmail.com";
        const password: string = "password";
        const role: string = "organiser"
        userUseCase.register(name, email, password, role);
        expect(register).toHaveBeenCalledTimes(1)
        expect(register).toBeCalledWith(name, email, password, role);
        expect(register).toReturn();
    })
});
