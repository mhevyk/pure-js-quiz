import { options } from './options';
import { updatePlaceholders } from './components/placeholder';
import { filterUnique } from './utils';

const vocabularyContainer = document.querySelector('.table__vocabulary .table__content');

class Vocabulary {
    constructor(container = vocabularyContainer) {
        this.container = container;
        this.groups = [];
        this.data = [];
        this.print();
    }

    get recordsCount() {
        return this.data.length;
    }

    isEmpty = () => {
        return this.data.length === 0;
    };

    indexOf = (word) => {
        return this.data.findIndex(record => record.word === word);
    };

    addOne = ({word, translates, group}) => {
        const wordIndex = this.indexOf(word);

        if (wordIndex !== -1) {
            this.#addTranslatesByWordIndex(wordIndex, translates);
            return;
        }

        this.data.push({word, translates, group});
        this.addGroup(group);
    };

    addMany = (recordsList) => {
        recordsList.forEach(record => this.addOne(record));
        this.save();
    };

    addManyAsync = (recordsList) => {
        return Promise.resolve(this.addMany(recordsList));
    };

    delete = (word) => {
        const wordIndex = this.indexOf(word);
        if (wordIndex !== -1) {
            this.data.splice(wordIndex, 1);
            return true;
        }
        return false;
    };

    hasGroup = (group) => {
        return this.groups.includes(group);
    };

    getGroupContent = (group = '') => {
        if (group === '') {
            return this.data;
        }
        
        return this.data.filter(record => record.group === group);
    };

    addGroup = (group) => {
        if (!this.groups.includes(group)) {
            this.groups.push(group);
        }
    };

    removeGroup = (group) => {
        const groupIndex = this.groups.indexOf(group);
        if (groupIndex !== -1) {
            this.groups.splice(groupIndex, 1);
            this.data = this.data.filter(record => record.group !== group);
            return true;
        }
        return false;
    };

    addTranslates = (word, translates) => {
        const wordIndex = this.indexOf(word);
        if (wordIndex !== -1) {
            this.#addTranslatesByWordIndex(wordIndex, translates);
        }
    };

    print = () => {
        const isEmpty = !this.data.length;
        const { showGroups } = options;

        updatePlaceholders(isEmpty ? 'show' : 'hide');

        if (showGroups) {
            let groupIndex = 1;
            this.groups.forEach(group => {
                const groupData = this.getGroupContent(group);
                if (groupData.length) {
                    this.#printGroup(group);
                    this.#printRecordsList(groupData, `${groupIndex}.`);
                    groupIndex++;
                }
            });
        } else {
            this.#printRecordsList(this.data);
        }
    };

    load = () => {
        const vocabularyData = localStorage.getItem('vocabularyAppData');
        if (vocabularyData) {
            const { data, groups } = JSON.parse(vocabularyData);
            this.data = data;
            this.groups = groups;
        }
    };

    save = () => {
        const vocabularyDataToSave = {
            data: this.data,
            groups: this.groups
        };

        localStorage.setItem('vocabularyAppData', JSON.stringify(vocabularyDataToSave));
    };

    clear = () => {
        this.data = [];
        this.groups = [];
        this.print();
        localStorage.removeItem('vocabularyAppData');
    };

    #addTranslatesByWordIndex = (wordIndex, translates) => {
        translates = Array.isArray(translates) ? translates : [translates];
        this.data[wordIndex].translates.push(...translates);
        this.data[wordIndex].translates =
            filterUnique(this.data[wordIndex].translates);
    };

    #printGroup = (group) => {
        this.container.innerHTML += `
            <div class='table__group'>
                <div class='table__item-index'></div>
                <div class='table__item'>${group}</div>
            </div>
        `;
    };

    #printRecord = (index, record) => {
        const position = index.split('.').at(-1);
        this.container.innerHTML += `
            <div class="table__record${position % 2 ? ' strip' : ''}">
                <div class='table__item table__item-index'>${index}</div>
                <div class='table__item'>${record.word}</div>
                <div class='table__item'>${record.translates.join(', ')}</div>
            </div>
        `;
    };

    #printRecordsList = (list, groupIndex = '') => {
        list.forEach((record, recordIndex) => {
            this.#printRecord(`${groupIndex}${recordIndex + 1}`, record);
        });
    };
}

export const vocabulary = new Vocabulary();
export { vocabularyContainer };
