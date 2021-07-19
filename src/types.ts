export interface UserOptions {
  /**
   * Scale of icons against 1em
   *
   * @default 1
   */
  scale?: number;

  /**
   * Style apply to icons by default
   *
   * @default ''
   */
  defaultStyle?: string;

  /**
   * Class names apply to icons by default
   *
   * @default ''
   */
  defaultClass?: string;
}

export type ResolvedOptions = Required<UserOptions>;
