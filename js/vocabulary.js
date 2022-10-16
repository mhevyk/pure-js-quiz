class Vocabulary {
    constructor() {
        this.groups = [];
        this.data = [];
        this.props = [];
    }

    indexOf(word) {
        return this.data.findIndex(record => record.word === word);
    }

    add(record) {
        const wordIndex = this.indexOf(record.word);

        if (wordIndex !== -1) {
            this.#addTranslatesByWordIndex(wordIndex, record.translates);
            return;
        }

        this.data.push(record);
        this.addGroup(record.group);
    }

    remove(word) {
        const wordIndex = this.indexOf(word);
        if (wordIndex !== -1) {
            this.data.splice(wordIndex, 1);
            return true;
        }
        return false;
    }

    addGroup(group) {
        if (!this.groups.includes(group)) {
            this.groups.push(group);
        }
    }

    removeGroup(group) {
        const groupIndex = this.groups.indexOf(group);
        if (groupIndex !== -1) {
            this.groups.splice(groupIndex, 1);
            this.data = this.data.filter(record => record.group !== group);
            return true;
        }
        return false;
    }

    addTranslates(word, translates) {
        const wordIndex = this.indexOf(word);
        if (wordIndex !== -1) {
            this.#addTranslatesByWordIndex(wordIndex, translates);
        }
    }

    #addTranslatesByWordIndex(wordIndex, translates) {
        translates = Array.isArray(translates) ? translates : [translates];
        this.data[wordIndex].translates.push(...translates);
        this.data[wordIndex].translates = this.data[wordIndex].translates.unique();
    }

    print() {
        this.data.forEach(record => {
            console.log(`${record.word} => ${record.translates.join(", ")} (${record.group})`);
        });
    }

    printTo(container) {
        container.innerHTML = "";

        this.data.forEach((record, recordIndex) => {
            container.innerHTML += `
                <div class="vocabulary__record">
                    <div class="record__item record__index">${recordIndex + 1}</div>
                    <div class="record__item record__word">${record.word}</div>
                    <div class="record__item record__translates">${record.translates.join(", ")}</div>
                </div>
            `;
        });
    }
}