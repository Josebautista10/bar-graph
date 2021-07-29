let quantityBars = 0;

let selectors = {
  barsQuantityInput: document.getElementById('selectBarGraph'),
  barsContainerInput: document.getElementById('barsContainerInput'),
};

selectors.barsQuantityInput.addEventListener('input', addInputBars);

function addInputBars(e) {
  const totalBars = parseInt(e.target.options.selectedIndex);

  if (quantityBars === 0) {
    addBarInputs(totalBars);
  } else {
    const container = selectors.barsContainerInput;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    addBarInputs(totalBars);
  }

  quantityBars = selectors.barsContainerInput.querySelectorAll('input').length;
}

function addBarInputs(totalBars) {
  for (i = 0; i < totalBars; i++) {
    selectors.barsContainerInput.appendChild(
      document.createTextNode(`Bar ${i + 1}`)
    );
    const input = document.createElement('input');
    input.type = 'text';
    input.name = `bar-${i + 1}`;
    input.className = 'bar-input-value'
    selectors.barsContainerInput.appendChild(input);
  }
}

function getInfo() {
  const formSelector = document.getElementById('bar-graph-form');
  const form = Array.from(formSelector).reduce(
    (acc, input) => ({
      ...acc,
      [input.id]: input.value,
    }),
    {}
  );

  console.log('%c%s', 'font-size: 60px;', '🐛 💻', 'form 👉', form);
}
