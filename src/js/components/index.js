import { initScrollTopArrow } from './arrow';
import { initAllRangeInputs } from './range-input';
import { initSwitchers, initShowGroupsSwitcher } from './switch';
import { initExitButton } from './exit';
import { initFooterYearRange } from './app-existance-date-range';

function initComponents() {
    initScrollTopArrow();
    initAllRangeInputs();
    initSwitchers();
    initShowGroupsSwitcher();
    initExitButton();
    initFooterYearRange();
}

export { initComponents };