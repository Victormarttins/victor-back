import { Injectable } from '@nestjs/common';
import { Tarefa } from './entities/tarefa.entity';


@Injectable()
export class TarefaService {

  private readonly tarefas:Tarefa[]=[];
  create(createTarefaDto: Tarefa) {
   this.tarefas.push(createTarefaDto);
  }

  findAll() {
    
    return this.tarefas;
  }

  findOne(id: number) {
    return `This action returns a #${id} tarefa`;
  }

  update(id: number, updateTarefaDto: Tarefa) {
    return `This action updates a #${id} tarefa`;
  }

  remove(id: number) {
    return `This action removes a #${id} tarefa`;
  }
}
