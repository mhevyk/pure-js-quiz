export default class Stack {
    #data = [];
    
    constructor(initialValue) {
        this.#data.push(initialValue);
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