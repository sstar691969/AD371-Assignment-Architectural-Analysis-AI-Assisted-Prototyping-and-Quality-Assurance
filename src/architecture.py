"""Initial architecture model for the JupyterLab Architecture Explorer.

Component descriptions are hypotheses to verify against official sources.
"""

COMPONENTS = [
    {
        "id": "browser",
        "name": "JupyterLab Browser Interface",
        "category": "Presentation",
        "responsibility": "Provides the notebook editor, file browser, and user interface.",
        "source": "https://github.com/jupyterlab/jupyterlab",
    },
    {
        "id": "server",
        "name": "Jupyter Server",
        "category": "Server",
        "responsibility": "Provides server-side services and coordinates access to resources.",
        "source": "https://github.com/jupyter-server/jupyter_server",
    },
    {
        "id": "notebook",
        "name": "Notebook Documents",
        "category": "Data",
        "responsibility": "Represent notebook cells, metadata, and saved outputs.",
        "source": "https://github.com/jupyter/nbformat",
    },
    {
        "id": "kernel",
        "name": "Python Kernel",
        "category": "Execution",
        "responsibility": "Executes Python code and returns execution results.",
        "source": "https://github.com/ipython/ipykernel",
    },
    {
        "id": "extensions",
        "name": "Extensions",
        "category": "Extensibility",
        "responsibility": "Allow additional functionality to be integrated into JupyterLab.",
        "source": "https://jupyterlab.readthedocs.io/",
    },
]


def get_components():
    """Return independent copies of all component records."""
    return [component.copy() for component in COMPONENTS]


def find_component(component_id):
    """Return a component by ID, or None if it is not found."""
    for component in COMPONENTS:
        if component["id"] == component_id:
            return component.copy()
    return None
