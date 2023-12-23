import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './service/todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {
  }

  @Get()
  async fetchTodos() {
    return await this.todoService.fetchAll()
  }

  @Get(':id')
  async fetchTodo(@Param() params: any) {
    return await this.todoService.fetchOne(params.id)
  }

  @Post()
  async createTodo(@Body() createTodoDto: CreateTodoDto) {
    await this.todoService.create(createTodoDto)

    return createTodoDto
  }

  @Put(':id')
  async updateTodo(@Body() updateTodoDto: UpdateTodoDto, @Param() params: any) {
    await this.todoService.update(params.id, updateTodoDto)

    return updateTodoDto
  }

  @Delete(':id')
  async deleteTodo(@Param() params: any) {
    await this.todoService.deleteOne(params.id)

    return {
      deleted: params.id
    }
  }
}
