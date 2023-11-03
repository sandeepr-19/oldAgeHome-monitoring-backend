import { Body, Controller, Post, Req } from '@nestjs/common';
import { AlertDto } from './dto/alert.dto';
import { EdgeNodeService } from './edge-node.service';

@Controller('edge-node')
export class EdgeNodeController {
  constructor(private readonly edgeNodeService: EdgeNodeService) {}
  @Post('/sendAlert')
  async createElder(@Body() alertDto: AlertDto, @Req() request: any) {
    console.log(alertDto);
    return true;
  }
}
