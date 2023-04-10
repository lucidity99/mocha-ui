import * as components from './index'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    MoButton: typeof components.Button
    MoIcon: typeof components.Icon
  }
}
export {}
