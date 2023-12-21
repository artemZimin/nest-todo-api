import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  @Get()
  fetchTodos(): Array<TodoDto> {
    return [
      {
        id: 1,
        name: 'Todo1',
        completed: false,
      },
      {
        id: 2,
        name: 'Todo2',
        completed: false,
      },
      {
        id: 3,
        name: 'Todo3',
        completed: false,
      },
    ];
  }

  @Get(':id')
  fetchTodo(@Param() params: any): TodoDto {
    return {
      id: Number(params.id),
      name: 'Todo' + Number(params.id),
      completed: false
    }
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return createTodoDto
  }

  @Put()
  updateTodo(@Body() updateTodoDto: UpdateTodoDto) {
    return updateTodoDto
  }

  @Delete(':id')
  deleteTodo(@Param() params: any): object {
    return {
      deleted: params.id
    }
  }
}
