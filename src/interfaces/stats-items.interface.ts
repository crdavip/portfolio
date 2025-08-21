export interface StatsItem {
  title: ValidStats;
  stat: number;
}

export type ValidStats = "years" | "webs" | "pieces" | "coffees";
