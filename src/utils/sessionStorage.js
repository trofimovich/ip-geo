export default {
  loadState: (key) => {
    try {
      const serializedState = sessionStorage.getItem(key);
      if (serializedState === null) {
        return undefined;
      }

      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  },
  saveState: (key, state) => {
    try {
      const serializedState = JSON.stringify(state);
      sessionStorage.setItem(key, serializedState);

      return true;
    } catch {
      return false;
    }
  },
};
