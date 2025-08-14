export interface StatsItem {
  title: ValidStats;
  stat: number;
}

export type ValidStats = "Años" | "Webs" | "Piezas" | "Cafés";
