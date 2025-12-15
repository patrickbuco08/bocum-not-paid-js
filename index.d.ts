/**
 * bocum-not-paid-js TypeScript definitions
 */

export interface BocumNotPaidOptions {
  /** Payment deadline date in any format accepted by `new Date()` */
  deadline: string;
  /** Body opacity when overdue (default: 0.4) */
  opacity?: number;
  /** Number of grace days after deadline (default: 0) */
  graceDays?: number;
  /** Warning message to display (default: 'Payment overdue') */
  message?: string;
}

/**
 * Applies payment overdue warning to the current page
 * @param options Configuration options for the warning behavior
 */
export declare function bocumNotPaid(options: BocumNotPaidOptions): void;
