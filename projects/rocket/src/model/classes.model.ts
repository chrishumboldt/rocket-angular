/**
 * @author Chris Humboldt
 */

export interface ClassNameFromParams {
  from: any;
  classNames: any;
}
export interface ClassNameToParams {
  to: any;
  classNames: any;
}
export interface ClassNameExecuteParams {
  element: HTMLElement;
  classNames: string[];
}
export interface ClassNameModificationParams {
  elements: any;
  add?: string;
  remove?: string;
}
export interface ClassNameToggleParams {
  elements: any;
  className: string;
}
