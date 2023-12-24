import { DataSource, Repository } from 'typeorm';
import { Todo } from '../entity/todo.entity';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoRepository {

  private repository: Repository<Todo>

  constructor(private dataSource: DataSource) {
    this.repository = dataSource.getRepository(Todo)
  }

  async create(createTodoDto: CreateTodoDto) {
    const todo = new Todo();
    todo.completed = createTodoDto.completed
    todo.name = createTodoDto.name

    await this.repository.save(todo)
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    await this.repository.update(id, updateTodoDto)
  }

  async fetchAll() {
    return this.repository.createQueryBuilder('wt')
      .addOrderBy('t.id', 'DESC')
      .getMany()
  }

  async fetchOneById(id: number) {
    return this.repository.findOne({ where: { id } })
  }

  async deleteOneById(id: number) {
    await this.repository.delete({ id })
  }
}
