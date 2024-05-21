export function useSearch () {
  function searchString<T> (query: string, items: T[]): T[] {
    return items.filter((item) => {
      if (typeof item !== 'object' || item === null) {
        return false;
      }

      if ('title' in item && typeof item.title === 'string') {
        return item.title.toLowerCase().includes(query.toLowerCase());
      }

      return false;
    });
  }

  return {
    searchString
  };
}