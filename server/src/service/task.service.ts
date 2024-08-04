import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EntityManager } from 'typeorm';


@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  constructor(
    private readonly entityManager: EntityManager,
  ){}

  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  handleCron() {
    this.logger.debug('Deactivate candidate and test after 3days');
    this.entityManager.query('UPDATE candidate_test c1 JOIN candidate c2 ON c1.candidateId = c2.id SET c1.active = 0, c2.can_take_test = 0 WHERE c1.test_scheduled_date < CURDATE() AND c1.active = 1;')
  }
}
