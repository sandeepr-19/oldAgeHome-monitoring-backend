import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  UseGuards,
  Req,
  Header,
} from '@nestjs/common';
import { EldersService } from './elders.service';
import { CreateElderDto } from './dto/createElder.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('elders')
export class EldersController {
  constructor(private readonly eldersService: EldersService) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  async getElderById(@Param('id') id: string, @Req() request: any) {
    return this.eldersService.getElderById(id);
  }

  @UseGuards(AuthGuard)
  @Get()
  async getEldersByFilter(@Body() filterInput: any, @Req() request: any) {
    const userId = request.headers.userid;
    return this.eldersService.getEldersByFilter({
      ...filterInput,
      careTakerId: userId,
    });
  }

  @UseGuards(AuthGuard)
  @Post('/create')
  async createElder(
    @Body() createElderDto: CreateElderDto,
    @Req() request: any,
  ) {
    createElderDto.careTakerId = request.decodedData.userId;
    return this.eldersService.createElder(createElderDto);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async updateElder(
    @Param('id') id: string,
    @Body() createElderDto: CreateElderDto,
    @Req() request: any,
  ) {
    return this.eldersService.updateElder(createElderDto, id);
  }
}
