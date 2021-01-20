const readCookieAsMap = (): GOb => {
  const deserialisedCookie = document.cookie
    .split(';')
    .filter((keyValue) => keyValue !== '')
    .map((keyValue: string) => keyValue.trim().split('='));

  const cookieMap: GOb = deserialisedCookie.reduce(
    (cookieMap, kvArr) => ({ ...cookieMap, [kvArr[0]]: kvArr[1] }),
    {}
  );

  return cookieMap;
};

const convertMapToCookieString = (map: GOb): string => {
  const newCookie = Object.entries(map)
    .map((kvArr) => kvArr[0] + '=' + kvArr[1])
    .join(';');

  return newCookie;
};

export const readCookieKey = (key: string): Nullable<string> => {
  const cookieMap = readCookieAsMap();
  const cookieKey = cookieMap[key] ?? null;

  return cookieKey;
};

export const updateCookieKey = (key: string, value: string): void & Effect<LocalStorageAction> => {
  const cookieMap = readCookieAsMap();
  cookieMap[key] = value;
  const cookieString = convertMapToCookieString(cookieMap);

  document.cookie = cookieString;
};

export const clearCookieKey = (key: string): void & Effect<LocalStorageAction> => {
  const cookieMap = readCookieAsMap();
  console.log({ cookieMap });

  cookieMap[key] = '';
  console.log({ cookieMap });

  const cookieString = convertMapToCookieString(cookieMap);
  console.log({ cookieString });

  document.cookie = cookieString;
};
