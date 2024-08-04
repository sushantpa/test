import { CandidateTest } from '../../domain/candidate-test.entity';
import { CandidateTestDTO } from '../dto/candidate-test.dto';

/**
 * A CandidateTest mapper object.
 */
export class CandidateTestMapper {
    static fromDTOtoEntity(entityDTO: CandidateTestDTO): CandidateTest {
        if (!entityDTO) {
            return;
        }
        let entity = new CandidateTest();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach((field) => {
            entity[field] = entityDTO[field];
        });
        return entity;
    }

    static fromEntityToDTO(entity: CandidateTest): CandidateTestDTO {
        if (!entity) {
            return;
        }
        let entityDTO = new CandidateTestDTO();

        const fields = Object.getOwnPropertyNames(entity);

        fields.forEach((field) => {
            entityDTO[field] = entity[field];
        });

        return entityDTO;
    }
}
