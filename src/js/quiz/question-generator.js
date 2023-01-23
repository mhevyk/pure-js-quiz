import { vocabulary } from '../vocabulary';
import { shuffle } from '../utils';

function* questionGenerator(group, questionsCount) {
    const groupContent = vocabulary.getGroupContent(group);
    const shuffledQuestions = shuffle(groupContent);

    for (let i = 0; i < questionsCount; i++) {
        yield shuffledQuestions[i];
    }
}

export default questionGenerator;