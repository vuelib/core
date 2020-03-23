import { get } from 'lodash';
import { createPopper } from '@popperjs/core';

export default class Tooltip {

  private mouseOverEventListener: EventListener;
  private mouseOutEventListener: EventListener;

  /**
   *
   */
  public config: Object;

  /**
   * 
   */
  private el: HTMLElement;

  /**
   * 
   */
  private targetEl: HTMLElement;

  /**
   * 
   * @param Object 
   * @param config 
   */
  constructor (config: Object) {
    this.config = config;

    this.el = get(config, 'el', null);
    this.targetEl = get(config, 'targetEl', null);

    this.mouseOverEventListener = e => this.show(e);
    this.mouseOutEventListener = e => this.hide(e);

    this.init();
  }

  private init(): void {

    this.el.addEventListener('mouseup', this.mouseOverEventListener);
    this.el.addEventListener('mousemove', this.mouseOutEventListener);
  }

  /**
   *
   * @param e
   */
  public show(e: any): void {

    e.preventDefault();
    e.stopPropagation();

    const config: Object = {
      placement: 'bottom',
      // modifiers: [
      //   { name: 'offset', options: { offset: this.offset } },
      // ],
    };

    createPopper(this.targetEl, this.el, config);

    this.el.style.display = 'block';
  }

   /**
   *
   * @param e
   */
  public hide(e: any): void {
    
    this.el.style.display = 'none';
  }

  /**
   * 
   */
  public dispose(): void {
    
    this.el.removeEventListener('mouseup', this.mouseOverEventListener);
    this.el.removeEventListener('mousemove', this.mouseOutEventListener);
  }
}