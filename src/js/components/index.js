import { initScrollTopArrow } from './arrow';
import { initAllRangeInputs } from './range-input';
import { initCheckboxes, initShowGroupsCheckbox } from './checkbox-pill';
import { initExitButton } from './exit';
import { initFooterYearRange } from './app-existance-date-range';

function initComponents() {
    initScrollTopArrow();
    initAllRangeInputs();
    initCheckboxes();
    initShowGroupsCheckbox();
    initExitButton();
    initFooterYearRange();
}

export { initComponents };