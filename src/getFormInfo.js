export function getFormInfo() {
  const formSelector = document.getElementById('bar-graph-form');
  const formInfo = Array.from(formSelector).reduce(
    (acc, input) => ({
      ...acc,
      [input.id]: input.value,
    }),
    {}
  );

  return { data: [], options: {}}
}