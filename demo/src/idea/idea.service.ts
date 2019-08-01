import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { IdeaEntity } from './idea.entity';
import { IdeaDTO } from './idea.dto';

@Injectable()
export class IdeaService {
    constructor(
        @InjectRepository(IdeaEntity)
        private ideaRepository: Repository<IdeaEntity>) {
    }

    async showAll() {
        return await this.ideaRepository.find();
    }

    async create(data: IdeaDTO) {
        const idea = await this.ideaRepository.create(data);
        await this.ideaRepository.save(idea);

        return idea;
    }

    async read(id: string) {
        const idea = await this.ideaRepository.findOneOrFail({ id });
        if (!idea) {
                throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        // return id;

        return idea;
    }

    async update(id: string, data: Partial<IdeaDTO>) {
        const idea = await this.ideaRepository.update({id}, data);
        if (!idea) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return await this.ideaRepository.findOne({ id });
    }

    async destroy(id: string) {
        const idea = await this.ideaRepository.delete({ id });
        if (!idea) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return { deleted: true };
    }
}
