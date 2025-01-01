export type RewardRadar<T> = T extends `${string}[${infer R}$]${infer Rest}`
  ? `${R}$` | RewardRadar<Rest>
  : null;
