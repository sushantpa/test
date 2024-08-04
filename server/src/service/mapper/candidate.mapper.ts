import { Candidate } from '../../domain/candidate.entity';
import { CandidateDTO } from '../dto/candidate.dto';

/**
 * A Candidate mapper object.
 */
export class CandidateMapper {
    static fromDTOtoEntity(entityDTO: CandidateDTO): Candidate {
        if (!entityDTO) {
            return;
        }
        let entity = new Candidate();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach((field) => {
            entity[field] = entityDTO[field];
        });
        return entity;
    }

    static fromEntityToDTO(entity: Candidate): CandidateDTO {
        if (!entity) {
            return;
        }
        let entityDTO = new CandidateDTO();

        const fields = Object.getOwnPropertyNames(entity);

        fields.forEach((field) => {
            entityDTO[field] = entity[field];
        });

        return entityDTO;
    }
}
