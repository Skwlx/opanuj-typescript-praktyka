import { type FeatureFlags } from './legacy-flags.ts';

type FlagsV2<T> = {
  [K in keyof T as K extends `${infer R}V2Enabled` ? `${R}Enabled` : never]: boolean;
};

export type ModernFeatureFlags = FlagsV2<FeatureFlags>;

export function getFeatureFlagsV2(flags: FeatureFlags): ModernFeatureFlags {
  const flagsV2: ModernFeatureFlags = {
    isCartEnabled: flags.isCartV2Enabled,
    isSearchEnabled: flags.isSearchV2Enabled,
    isContactFormEnabled: flags.isContactFormV2Enabled,
  };

  return flagsV2;
}
