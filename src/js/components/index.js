import { initScrollTopArrow } from './arrow';
import { initAllRangeInputs } from './range-input';
import { initSwitchers, initShowGroupsSwitcher } from './switch';
import { initFooterYearRange } from './app-existance-date-range';

function initComponents() {
    initScrollTopArrow();
    initAllRangeInputs();
    initSwitchers();
    initShowGroupsSwitcher();
    initFooterYearRange();
}

export { initComponents };