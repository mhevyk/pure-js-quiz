import { initScrollTopArrow } from './arrow';
import { initAllRangeInputs, initVocabularyRange } from './range-input';
import { initCheckboxes, initShowGroupsCheckbox } from './checkbox-pill';

function initComponents() {
    initScrollTopArrow();
    initAllRangeInputs();
    initVocabularyRange();
    initCheckboxes();
    initShowGroupsCheckbox();
}

export { initComponents };