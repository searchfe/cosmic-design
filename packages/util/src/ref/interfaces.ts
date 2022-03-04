export interface StaticUtility {
    [key: string]: {
      meta: { group: string, order: number },
      utility: { [key: string]: string | string[] };
    }
}