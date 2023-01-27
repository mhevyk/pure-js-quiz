import { initArrows } from './arrow';
import { initAllRangeInputs } from './range-input';
import { initSwitchers, initShowGroupsSwitcher } from './switch';
import { initFooterYearRange } from './app-existance-date-range';

function initComponents() {
    initArrows();
    initAllRangeInputs();
    initSwitchers();
    initShowGroupsSwitcher();
    initFooterYearRange();
}

export { initComponents };