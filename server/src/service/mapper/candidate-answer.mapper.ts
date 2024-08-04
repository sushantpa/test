import { CandidateAnswer } from '../../domain/candidate-answer.entity';
import { CandidateAnswerDTO } from '../dto/candidate-answer.dto';

/**
 * A CandidateAnswer mapper object.
 */
export class CandidateAnswerMapper {
    static fromDTOtoEntity(entityDTO: CandidateAnswerDTO): CandidateAnswer {
        if (!entityDTO) {
            return;
        }
        let entity = new CandidateAnswer();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach((field) => {
            entity[field] = entityDTO[field];
        });
        return entity;
    }

    static fromEntityToDTO(entity: CandidateAnswer): CandidateAnswerDTO {
        if (!entity) {
            return;
        }
        let entityDTO = new CandidateAnswerDTO();

        const fields = Object.getOwnPropertyNames(entity);

        fields.forEach((field) => {
            entityDTO[field] = entity[field];
        });

        return entityDTO;
    }
}
