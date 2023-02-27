import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FaqService } from './faq.service';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import {
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger/dist';

@Controller('faq')
@ApiTags('FAQs')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastra uma uma nova FAQ' })
  @ApiBody({ type: CreateFaqDto })
  @ApiResponse({ status: 201, description: 'Cadastrato com sucesso.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 500, description: 'Erro interno de Servidor.' })
  create(@Body() createFaqDto: CreateFaqDto) {
    return this.faqService.create(createFaqDto);
  }

  @Get()
  @ApiOperation({ summary: 'Busca todas as FAQ' })
  @ApiResponse({ status: 200, description: 'Lista de todas as FAQs' })
  findAll() {
    return this.faqService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma FAQ por ID' })
  @ApiResponse({ status: 200, description: 'Lista de FAQ por ID' })
  findOne(@Param('id') id: string) {
    return this.faqService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza uma FAQ' })
  @ApiResponse({ status: 201, description: 'Atualizado com sucesso!' })
  update(@Param('id') id: string, @Body() updateFaqDto: UpdateFaqDto) {
    return this.faqService.update(id, updateFaqDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Exclui uma FAQ' })
  @ApiResponse({ status: 200, description: 'Removido com sucesso!' })
  remove(@Param('id') id: string) {
    return this.faqService.remove(id);
  }
}
