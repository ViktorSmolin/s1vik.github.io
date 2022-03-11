const instance1 = {
    name: "singleton",
};

const instance2 = {
    name: "singleton",
};

instance1 === instance2; // false

{} === {}; // false


let instance;

class Counter {
    constructor() {
        if (!instance) instance = this;
        instance.count = 0;
        return instance;
    }

    getCount() {
        return instance.count;
    }
    increaseCount() {
        return instance.count++;
    }
};