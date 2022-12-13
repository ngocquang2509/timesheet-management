/**
 * Helper to working with LocalStorage
 */
export const StorageHelper = {
  /**
   * Get data from LocalStorage
   * @param {String} key: key name of LocalStorage 
   * @returns: return data from LocalStorage
   */
  get: (key: string) => {
    try {
      let data = JSON.parse(localStorage.getItem(key) || '');
      if (!data) {
        data = [];
      }
      return data;
    } catch (err: unknown) {
      if (err instanceof Error) return err.message;
      return String(err);
    }
  },

  /**
   * Save a new data to Local Storage
   * @param {String} key: key name of LocalStorage 
   * @param {any} value: data that saved to LocalStorage
   */
  set: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
