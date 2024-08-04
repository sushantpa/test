import { Module } from '@nestjs/common';
import { TasksService } from '../service/task.service';

@Module({
  providers: [TasksService],
})
export class TasksModule {}