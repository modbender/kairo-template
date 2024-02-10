export default (props = {}) => {
  // keep default values in sync with @default tags in Pagination.propTypes
  const route = useRoute();
  const router = useRouter();

  const {
    boundaryCount = 1,
    count = 1,
    currentPage = 1,
    defaultPage = 1,
    disabled = false,
    hideNextButton = false,
    hidePrevButton = false,
    onChange: handleChange,
    page: pageProp,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
  } = props;

  const page = ref(parseInt(route.query?.page || 1, 10));
  const react = reactive({ page });

  const handleClick = (event, value) => {
    if (!pageProp) {
      react.page = value;
      router.push({ query: { ...route.query, page: value } });
    }
    if (handleChange) {
      handleChange(event, value);
    }
  };

  // https://dev.to/namirsab/comment/2050
  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const buttonPage = (type) => {
    switch (type) {
      case "first":
        return 1;
      case "previous":
        return page.value - 1;
      case "next":
        return page.value + 1;
      case "last":
        return count;
      default:
        return null;
    }
  };

  const items = computed(() => {
    const startPages = range(1, Math.min(boundaryCount, count));
    const endPages = range(
      Math.max(count - boundaryCount + 1, boundaryCount + 1),
      count
    );

    const siblingsStart = Math.max(
      Math.min(
        // Natural start
        page.value - siblingCount,
        // Lower boundary when page is high
        count - boundaryCount - siblingCount * 2 - 1
      ),
      // Greater than startPages
      boundaryCount + 2
    );

    const siblingsEnd = Math.min(
      Math.max(
        // Natural end
        page.value + siblingCount,
        // Upper boundary when page is low
        boundaryCount + siblingCount * 2 + 2
      ),
      // Less than endPages
      endPages.length > 0 ? endPages[0] - 2 : count - 1
    );

    // Basic list of items to render
    // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
    const itemList = [
      ...(showFirstButton ? ["first"] : []),
      ...(hidePrevButton ? [] : ["previous"]),
      ...startPages,

      // Start ellipsis
      // eslint-disable-next-line no-nested-ternary
      ...(siblingsStart > boundaryCount + 2
        ? ["start-ellipsis"]
        : boundaryCount + 1 < count - boundaryCount
          ? [boundaryCount + 1]
          : []),

      // Sibling pages
      ...range(siblingsStart, siblingsEnd),

      // End ellipsis
      // eslint-disable-next-line no-nested-ternary
      ...(siblingsEnd < count - boundaryCount - 1
        ? ["end-ellipsis"]
        : count - boundaryCount > boundaryCount
          ? [count - boundaryCount]
          : []),

      ...endPages,
      ...(hideNextButton ? [] : ["next"]),
      ...(showLastButton ? ["last"] : []),
    ];

    return itemList.map((item) =>
      typeof item === "number"
        ? {
            onClick: (event) => {
              handleClick(event, item);
            },
            type: "page",
            page: item,
            selected: item === page.value,
            disabled: disabled,
          }
        : {
            onClick: (event) => {
              handleClick(event, buttonPage(item));
            },
            type: item,
            page: buttonPage(item),
            selected: false,
            disabled:
              disabled ||
              (item.indexOf("ellipsis") === -1 &&
                (item === "next" || item === "last"
                  ? page.value >= count
                  : page.value <= 1)),
          }
    );
  });

  return items;
};
