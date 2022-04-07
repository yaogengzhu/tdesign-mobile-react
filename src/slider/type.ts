/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode } from '../common';

export interface TdSliderProps {
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: boolean;
  /**
   * 滑块当前值文本。<br />值为 true 显示默认文案；值为 false 不显示滑块当前值文本；<br />值为 `${value}%` 则表示组件会根据占位符渲染文案；<br />值类型为函数时，参数 `value` 标识滑块值，参数 `position=start` 表示范围滑块的起始值，参数 `position=end` 表示范围滑块的终点值
   * @default false
   */
  label?: string | boolean | TNode<{ value: SliderValue; position?: 'start' | 'end' }>;
  /**
   * 刻度标记，示例：[0, 10, 40, 200] 或者 `{ 10: (val) => val + '%', 50: (h, val) => <button>{val}</button> }`
   */
  marks?: Array<number> | SliderMarks;
  /**
   * 滑块范围最大值
   * @default 100
   */
  max?: number;
  /**
   * 滑块范围最小值
   * @default 0
   */
  min?: number;
  /**
   * 双游标滑块
   * @default false
   */
  range?: boolean;
  /**
   * 是否边界值
   * @default false
   */
  showExtremeValue?: boolean;
  /**
   * 步长
   * @default 1
   */
  step?: number;
  /**
   * 滑块值
   */
  value?: SliderValue;
  /**
   * 滑块值，非受控属性
   */
  defaultValue?: SliderValue;
  /**
   * 滑块值变化时触发
   */
  onChange?: (value: SliderValue) => void;
  /**
   * 结束拖动时触发
   */
  onDragend?: () => void;
  /**
   * 开始拖动时触发
   */
  onDragstart?: () => void;
}

export interface SliderMarks { [mark: number]: string | TNode<{ value: number }> };

export type SliderValue = number | Array<number>;
