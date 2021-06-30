
module.exports.paginateResults = ({
  after: cursor,
  pageSize = 20,
  results,
  // can pass in a function to calculate an item's cursor
  getCursor = () => null,
}) => {
  if (pageSize < 1) return [];

  // console.log(results);
  if (!cursor) return results.personArr.slice(0, pageSize);
  const cursorIndex = results.personArr.findIndex(item => {
    // if an item has a `cursor` on it, use that, otherwise try to generate one
    let itemCursor = item.cursor ? item.cursor : getCursor(item);

    // if there's still not a cursor, return false by default
    return itemCursor ? cursor === itemCursor : false;
  });

  return cursorIndex >= 0
    ? cursorIndex === results.personArr.length - 1 // don't let us overflow
      ? []
      : results.personArr.slice(
          cursorIndex + 1,
          Math.min(results.personArr.length, cursorIndex + 1 + pageSize),
        )
    : results.personArr.slice(0, pageSize);
};