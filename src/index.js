let quantityBars = 0;

let selectors = {
  barsQuantityInput: document.getElementById('selectBarGraph'),
  barsContainerInput: document.getElementById('barsContainerInput'),
};

selectors.barsQuantityInput.addEventListener('input', addInputBars);

function addInputBars(e) {
  const totalBars = parseInt(e.target.value);

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
    const row = document.createElement('div');
    row.className = 'bar-data-wrapper';
    row.id = `bar-data-wrapper-${i + 1}`;
    selectors.barsContainerInput.appendChild(row);

    const barDataWrapperSelector = selectors.barsContainerInput.querySelector(
      `#bar-data-wrapper-${i + 1}`
    );

    // Inject fieldset
    const fieldset = document.createElement('fieldset');
    fieldset.id = `fieldSet-${i + 1}`;
    barDataWrapperSelector.appendChild(fieldset);

    const fieldsetSelector = barDataWrapperSelector.querySelector(
      `#fieldSet-${i + 1}`
    );
    const legend = document.createElement('legend');
    legend.textContent = `Bar ${i + 1}`;
    fieldsetSelector.appendChild(legend);

    // Inject Bar height input
    const barHeight = document.createElement('input');
    barHeight.type = 'text';
    barHeight.id = `bar-height-${i + 1}`;
    barHeight.className = 'bar-height';
    fieldsetSelector.appendChild(barHeight);

    // Inject Bar color select
    const barColor = document.createElement('select');
    const barOption = document.createElement('option');
    barColor.id = `bar-color-${i + 1}`;
    barColor.className = 'bar-color';
    barOption.value = '';
    barOption.textContent = 'select color';
    barColor.appendChild(barOption);

    const barColorOptions = ['red', 'blue', 'green', 'yellow'];

    barColorOptions.forEach((color) => {
      const option = document.createElement('option');
      option.className = `option-${color}`
      option.value = color;
      option.textContent = color;
      barColor.appendChild(option);
    });

    fieldsetSelector.appendChild(barColor);
     
    
    //inject bar label color
    const labelColor = document.createElement('input')
    labelColor.placeholder = 'label color';
    labelColor.id = `label-color-${i + 1}`
    labelColor.className = 'label-color';
    fieldsetSelector.appendChild(labelColor);


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
