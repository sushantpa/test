import { Section } from '../../domain/section.entity';
import { SectionDTO } from '../dto/section.dto';

/**
 * A Section mapper object.
 */
export class SectionMapper {
    static fromDTOtoEntity(entityDTO: SectionDTO): Section {
        if (!entityDTO) {
            return;
        }
        let entity = new Section();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach((field) => {
            entity[field] = entityDTO[field];
        });
        return entity;
    }

    static fromEntityToDTO(entity: Section): SectionDTO {
        if (!entity) {
            return;
        }
        let entityDTO = new SectionDTO();

        const fields = Object.getOwnPropertyNames(entity);

        fields.forEach((field) => {
            entityDTO[field] = entity[field];
        });

        return entityDTO;
    }
}
