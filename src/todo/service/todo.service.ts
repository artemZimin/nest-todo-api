import { TodoRepository } from '../repository/todo.repository';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { Injectable } from '@nestjs/common';
import { UpdateTodoDto } from '../dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private todoRepository: TodoRepository) {
  }

  async create(createTodoDto: CreateTodoDto) {
    await this.todoRepository.create(createTodoDto);
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    await this.todoRepository.update(id, updateTodoDto);
  }

  async fetchAll() {
    return await this.todoRepository.fetchAll()
  }

  async fetchOne(id: number) {
    return this.todoRepository.fetchOneById(id)
  }

  async deleteOne(id: number) {
    await this.todoRepository.deleteOneById(id)
  }
}
