/**
 * Helper to working with LocalStorage
 */
export const StorageHelper = {
  // Get data from Local Storage
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

  // Save a new data to Local Storage
  set: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
