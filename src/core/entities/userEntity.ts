enum Role{
    Organiser = 'organiser',
    Participant = 'participant'
}
export class UserEntity {
    constructor(public readonly name: string, public readonly email: string, public password: string, public readonly role: Role) {}
}