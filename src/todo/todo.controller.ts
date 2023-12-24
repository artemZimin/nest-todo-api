import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './service/todo.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TodoDto } from './dto/todo.dto';
import { DeletedTodoDto } from './dto/deleted-todo.dto';
import { ErrorDto } from './dto/error.dto';

@ApiTags('todos')
@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {
  }

  @Get()
  @ApiOperation({ summary: 'Получить список задач' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Задачи получены успешно', type: [TodoDto] })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Ошибка сервера', type: ErrorDto })
  async fetchTodos() {
    return await this.todoService.fetchAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить задачу' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: HttpStatus.OK, description: 'Задача получены успешно', type: TodoDto })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Ошибка сервера', type: ErrorDto })
  async fetchTodo(@Param() params: any) {
    return await this.todoService.fetchOne(params.id)
  }

  @Post()
  @ApiOperation({ summary: 'Создать новую задачу' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Задача создана успешно', type: CreateTodoDto })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Ошибка валидации запроса', type: ErrorDto })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Ошибка сервера', type: ErrorDto })
  async createTodo(@Body() createTodoDto: CreateTodoDto) {
    await this.todoService.create(createTodoDto)

    return createTodoDto
  }

  @Put(':id')
  @ApiOperation({ summary: 'Редактировать задачу' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: HttpStatus.OK, description: 'Задача обновлена успешно', type: UpdateTodoDto })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Ошибка валидации запроса', type: ErrorDto })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Ошибка сервера', type: ErrorDto })
  async updateTodo(@Body() updateTodoDto: UpdateTodoDto, @Param() params: any) {
    await this.todoService.update(params.id, updateTodoDto)

    return updateTodoDto
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить задачу' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: HttpStatus.OK, description: 'Задача удалена успешно', type: DeletedTodoDto })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Ошибка сервера', type: ErrorDto })
  async deleteTodo(@Param() params: any) {
    await this.todoService.deleteOne(params.id)

    return {
      deleted: params.id
    }
  }
}
