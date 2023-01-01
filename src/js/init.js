/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const COUNTERS = {
    translateIdCounter: 0
};

const initApp = () => {
    const voc = new Vocabulary();
    new PageNavigator();
    voc.load();
    voc.print();
    updateUserInterface();
}

document.addEventListener('DOMContentLoaded', initApp);