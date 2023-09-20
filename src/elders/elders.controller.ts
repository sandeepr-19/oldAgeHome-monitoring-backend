import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  UseGuards,
  Req,
} from '@nestjs/common';
import { EldersService } from './elders.service';
import { CreateElderDto } from './dto/createElder.dto';
import { AuthGuard } from '../guard/auth.guard';

@Controller('elders')
export class EldersController {
  constructor(private readonly eldersService: EldersService) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  async getElderById(@Param('id') id: string, @Req() request: any) {
    console.log(request);
    return this.eldersService.getElderById(id);
  }

  @UseGuards(AuthGuard)
  @Get()
  async getEldersByFilter(@Body() filterInput: any, @Req() request: any) {
    return this.eldersService.getEldersByFilter(filterInput);
  }

  @UseGuards(AuthGuard)
  @Post()
  async createElder(
    @Body() createElderDto: CreateElderDto,
    @Req() request: any,
  ) {
    // console.log(request.decodedData);
    createElderDto.careTakerId = request.decodedData.userId;
    console.log(createElderDto);
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
