class Vocabulary {
    static #instance;
    constructor(container = document.querySelector(".vocabulary")) {
        if (Vocabulary.#instance) {
            return Vocabulary.#instance;
        }

        this.container = container;
        this.groups = [];
        this.data = [];
        this.props = {
            groups: true
        };

        Vocabulary.#instance = this;
        this.print();
    }

    getProp = (prop) => {
        return this.props[prop];
    }

    setProp = (prop, value) => {
        this.props[prop] = value;
    }

    indexOf = (word) => {
        return this.data.findIndex(record => record.word === word);
    }

    addOne = ({word, translates, group}) => {
        const wordIndex = this.indexOf(word);

        if (wordIndex !== -1) {
            this.#addTranslatesByWordIndex(wordIndex, translates);
            return;
        }

        this.data.push({word, translates, group});
        this.addGroup(group);
    }

    addMany = (recordsList) => {
        recordsList.forEach(record => this.addOne(record));
        this.save();
    }

    addManyAsync = (recordsList) => {
        return Promise.resolve(this.addMany(recordsList));
    }

    delete = (word) => {
        const wordIndex = this.indexOf(word);
        if (wordIndex !== -1) {
            this.data.splice(wordIndex, 1);
            return true;
        }
        return false;
    }

    getGroupContent = (group) => {
        return this.data.filter(record => record.group === group);
    }

    addGroup = (group) => {
        if (!this.groups.includes(group)) {
            this.groups.push(group);
        }
    }

    removeGroup = (group) => {
        const groupIndex = this.groups.indexOf(group);
        if (groupIndex !== -1) {
            this.groups.splice(groupIndex, 1);
            this.data = this.data.filter(record => record.group !== group);
            return true;
        }
        return false;
    }

    addTranslates = (word, translates) => {
        const wordIndex = this.indexOf(word);
        if (wordIndex !== -1) {
            this.#addTranslatesByWordIndex(wordIndex, translates);
        }
    }

    #addTranslatesByWordIndex = (wordIndex, translates) => {
        translates = Array.isArray(translates) ? translates : [translates];
        this.data[wordIndex].translates.push(...translates);
        this.data[wordIndex].translates =
            this.data[wordIndex].translates.unique();
    }

    printf = () => {
        this.data.forEach(record => {
            console.log(
                `${record.word} => ${record.translates.join(", ")} (${
                    record.group
                })`
            );
        });
    }

    #printGroup = (group) => {
        this.container.innerHTML += `
            <div class="vocabulary__group">
                <div class="record__index"></div>
                <div class="record__item">${group}</div>
            </div>
        `;
    }

    #printRecord = (index, record) => {
        const position = index.split(".").at(-1);
        this.container.innerHTML += `
            <div class="vocabulary__record${position % 2 ? ` strip` : ``}">
                <div class="record__item record__index">${index}</div>
                <div class="record__item record__word">${record.word}</div>
                <div class="record__item record__translates">${record.translates.join(", ")}</div>
            </div>
        `;
    }

    #printRecordsList = (list, groupIndex = ``) => {
        list.forEach((record, recordIndex) => {
            this.#printRecord(`${groupIndex}${recordIndex + 1}`, record);
        });
    }

    #printEmptyVocabularyPlaceholder = () => {
        this.container.innerHTML = `
            <div class="placeholder vocabulary__placeholder">
                Додайте слова до словника, щоб почати їх вивчення!
            </div>
        `;
    }

    print = () => {
        this.container.innerHTML = "";

        if (!this.data.length) {
            this.#printEmptyVocabularyPlaceholder();
        }
        else if (this.props.groups) {
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
    }

    load() {
        const vocabularyData = localStorage.getItem("vocabularyAppData");
        if (!vocabularyData) {
            return;
        }
        const {data, props, groups} = JSON.parse(vocabularyData);
        this.data = data;
        this.props = props;
        this.groups = groups;
    }

    save() {
        const vocabularyDataToSave = {
            data: this.data,
            props: this.props,
            groups: this.groups
        };

        localStorage.setItem("vocabularyAppData", JSON.stringify(vocabularyDataToSave));
    }

    clear = () => {
        this.data = [];
        this.groups = [];
        this.print();
        localStorage.removeItem("vocabularyAppData");
        updateSelectsWithGroups();
    }
}
