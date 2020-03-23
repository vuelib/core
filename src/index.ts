import Tooltip from './ts/tooltip';

export default class Main {

  private tooltip: Tooltip;

  /**
   * 
   */
  constructor() {

    const tip1: HTMLElement = document.getElementById('tip1') as HTMLElement;
    const btn1: HTMLElement = document.getElementById('btn1') as HTMLElement;

    this.tooltip = new Tooltip({
      el: tip1,
      targetEl: btn1,
    });
  }
}