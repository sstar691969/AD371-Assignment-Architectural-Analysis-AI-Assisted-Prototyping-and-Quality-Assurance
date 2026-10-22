const components = {
  browser: {
    name: "Browser Interface",
    category: "Presentation layer",
    responsibility:
      "Provides the user interface, including notebook editing and file browsing.",
    source: "https://github.com/jupyterlab/jupyterlab"
  },
  server: {
    name: "Jupyter Server",
    category: "Server layer",
    responsibility:
      "Provides server-side services and connects the interface to resources and kernels.",
    source: "https://github.com/jupyter-server/jupyter_server"
  },
  notebook: {
    name: "Notebook Documents",
    category: "Data and document format",
    responsibility:
      "Represent notebook cells, metadata, and saved outputs.",
    source: "https://github.com/jupyter/nbformat"
  },
  kernel: {
    name: "Computational Kernel",
    category: "Execution",
    responsibility:
      "Executes code and returns results for display in the notebook.",
    source: "https://github.com/ipython/ipykernel"
  },
  extensions: {
    name: "Extension System",
    category: "Extensibility",
    responsibility:
      "Allows additional capabilities to be integrated into the JupyterLab ecosystem.",
    source: "https://jupyterlab.readthedocs.io/"
  }
};

const componentButtons = document.querySelectorAll("[data-component]");

componentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const component = components[button.dataset.component];

    if (!component) return;

    componentButtons.forEach((item) => {
      item.classList.toggle("selected", item === button);
      item.setAttribute("aria-pressed", String(item === button));
    });

    document.getElementById("detail-name").textContent = component.name;
    document.getElementById("detail-category").textContent = component.category;
    document.getElementById("detail-responsibility").textContent =
      component.responsibility;
    document.getElementById("detail-source").href = component.source;
  });
});

const checks = [
  [
    "Component selection",
    "Select every architecture component and confirm the details change."
  ],
  [
    "Source links",
    "Open component source links and check that they lead to relevant projects."
  ],
  [
    "Workflow readability",
    "Confirm all five workflow steps are visible and readable."
  ],
  [
    "Checklist interaction",
    "Check and uncheck a QA item. The passed count should update."
  ],
  [
    "Reset behavior",
    "Check several items, press Reset checklist, and confirm all are unchecked."
  ],
  [
    "Responsive layout",
    "Narrow the browser window and confirm the page remains readable."
  ]
];

const qaList = document.getElementById("qa-list");
const progress = document.getElementById("qa-progress");

checks.forEach(([title, description], index) => {
  const label = document.createElement("label");
  label.className = "qa-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `qa-${index}`;

  const text = document.createElement("span");
  const strong = document.createElement("strong");
  strong.textContent = title;

  const small = document.createElement("small");
  small.textContent = description;

  text.append(strong, small);
  label.append(checkbox, text);
  qaList.append(label);

  checkbox.addEventListener("change", updateProgress);
});

function updateProgress() {
  const passed = qaList.querySelectorAll("input:checked").length;
  progress.textContent = `${passed} of ${checks.length} checks passed.`;
}

document.getElementById("reset-qa").addEventListener("click", () => {
  qaList.querySelectorAll("input").forEach((checkbox) => {
    checkbox.checked = false;
  });

  updateProgress();
});

const firstButton = document.querySelector('[data-component="browser"]');

if (firstButton) {
  firstButton.click();
}
