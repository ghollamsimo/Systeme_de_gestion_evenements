export class UserDto {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly role: string
    constructor(
        name: string,
        email: string,
        password: string,
        role: string = 'participant',
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
