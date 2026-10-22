from src.architecture import get_components, find_component


def test_components_are_available():
    assert len(get_components()) >= 4


def test_components_have_required_fields():
    required = {"id", "name", "category", "responsibility", "source"}

    for component in get_components():
        assert required.issubset(component.keys())
        assert all(component[field] for field in required)


def test_find_existing_component():
    component = find_component("kernel")

    assert component is not None
    assert component["name"] == "Python Kernel"


def test_find_unknown_component():
    assert find_component("unknown-component") is None


def test_returned_list_can_be_changed_safely():
    components = get_components()
    components.clear()

    assert len(get_components()) >= 4
