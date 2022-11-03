class Vocabulary {
    constructor(container = document.querySelector(".vocabulary")) {
        if (Vocabulary._instance) {
            return Vocabulary._instance;
        }

        this.container = container;
        this.groups = [];
        this.data = [];
        this.props = {
            groups: true
        };

        Vocabulary._instance = this;
    }

    getProp(prop) {
        return this.props[prop];
    }

    setProp(prop, value) {
        this.props[prop] = value;
    }

    indexOf(word) {
        return this.data.findIndex(record => record.word === word);
    }

    add({word, translates, group}) {
        const wordIndex = this.indexOf(word);

        if (wordIndex !== -1) {
            this.#addTranslatesByWordIndex(wordIndex, translates);
            return;
        }

        this.data.push({word, translates, group});
        this.addGroup(group);
    }

    remove(word) {
        const wordIndex = this.indexOf(word);
        if (wordIndex !== -1) {
            this.data.splice(wordIndex, 1);
            return true;
        }
        return false;
    }

    getGroupContent(group) {
        return this.data.filter(record => record.group === group);
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
        this.data[wordIndex].translates =
            this.data[wordIndex].translates.unique();
    }

    printf() {
        this.data.forEach(record => {
            console.log(
                `${record.word} => ${record.translates.join(", ")} (${
                    record.group
                })`
            );
        });
    }

    #printGroup(group) {
        this.container.innerHTML += `
            <div class="vocabulary__group">
                <div class="record__index"></div>
                <div class="record__item">${group}</div>
            </div>
        `;
    }

    #printRecord(index, record) {
        const position = index.split(".").at(-1);
        this.container.innerHTML += `
            <div class="vocabulary__record${position % 2 ? ` strip` : ``}">
                <div class="record__item record__index">${index}</div>
                <div class="record__item record__word">${record.word}</div>
                <div class="record__item record__translates">${record.translates.join(", ")}</div>
            </div>
        `;
    }

    #printRecordsList(list, groupIndex = ``) {
        list.forEach((record, recordIndex) => {
            this.#printRecord(`${groupIndex}${recordIndex + 1}`, record);
        });
    }

    print() {
        this.container.innerHTML = "";

        if (this.props.groups) {
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
}

(function () {
    document.addEventListener("DOMContentLoaded", () => {
        const voc = new Vocabulary();
        voc.add({ word: "cat", translates: ["кіт"], group: "Тварини" });
        voc.add({ word: "cat", translates: ["кіт"], group: "Риби" });
        voc.add({ word: "cat", translates: ["кішка"], group: "Риби" });
        voc.add({ word: "dog", translates: ["пес"], group: "Тварини" });
        voc.add({ word: "fish", translates: ["риба"], group: "Щось" });
        voc.add({ word: "dino", translates: ["дино"], group: "Щось" });
        voc.add({ word: "tiger", translates: ["тигр"], group: "Щось" });
        voc.add({ word: "lion", translates: ["лев"], group: "Щось" });
        voc.print();
    });
})();
