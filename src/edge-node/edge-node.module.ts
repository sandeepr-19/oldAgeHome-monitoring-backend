import { Module } from '@nestjs/common';
import { EdgeNodeController } from './edge-node.controller';
import { EdgeNodeService } from './edge-node.service';

@Module({
  providers: [EdgeNodeService],
  exports: [EdgeNodeService],
  controllers: [EdgeNodeController],
})
export class EdgeNodeModule {}
