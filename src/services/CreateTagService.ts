import {TagRepository} from '../database/repositories/TagRepository';
import {getCustomRepository} from 'typeorm';

interface ITagRequest {
    name: string;
}

export class CreateTagService {
  async execute({name}: ITagRequest) {
    const tagRepository = getCustomRepository(TagRepository);

    if (!name) throw new Error('Tag invalid or not informed');

    const tagAlreadyExists = await tagRepository.findOne({name});
    if (tagAlreadyExists) throw new Error('Tag already exists');


    const tag = tagRepository.create({name});
    await tagRepository.save(tag);

    return tag;
  }
}
