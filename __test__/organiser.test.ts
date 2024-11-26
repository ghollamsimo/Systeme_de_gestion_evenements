import {OrganiserUseCase} from "../src/application/usecases/organiserUseCase";
import {OrganiserRepositoryImpl} from "../src/infrastructure/repositories/organiserRepositoryImpl";

describe(' Testing Crud of Participant', () => {
    let organiserUseCase: OrganiserUseCase
    beforeEach(() => {
        const organiserRepositoryImpl: OrganiserRepositoryImpl = new OrganiserRepositoryImpl()
        organiserUseCase = new OrganiserUseCase(organiserRepositoryImpl)
    })

})