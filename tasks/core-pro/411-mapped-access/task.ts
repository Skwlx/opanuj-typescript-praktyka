type PagesMap = {
  homepage: string;
  about: string;
  contact: string;
};

type PagesAccess<T> = {
  [K in keyof T as string]: boolean;
};

export function checkAccess(map: PagesMap): PagesAccess<PagesMap> {
  const access: PagesAccess<PagesMap> = {};
  for (const key in map) {
    access[key] = true;
  }
  return access;
}
