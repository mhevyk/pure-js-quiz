export default class Stack {
    #data = [];
    
    constructor(initialValue) {
        this.#data.push(initialValue);
    }

    isEmpty() {
        return this.#data.length === 0;
    }
    
    push(value) {
        this.#data.push(value);
    }

    pop() {
        return this.#data.pop();
    }

    top() {
        return this.#data.at(-1);
    }
}