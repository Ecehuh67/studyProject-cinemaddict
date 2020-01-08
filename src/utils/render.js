export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const render = (container, component, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
  }
};

export const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};

export const replaceSort = (container) => {
  const sortElement = document.querySelector(`.sort`);
  const filmsContainerElement = document.querySelector(`.films`);

  container.insertBefore(sortElement, filmsContainerElement);
};

export const replace = (newComponent, oldComponent) => {
  replaceElements(newComponent.getElement(), oldComponent.getElement());
};

export const replaceElements = (newElement, oldElement) => {
  const parentElement = oldElement.parentElement;

  const isExistElements = !!(parentElement && newElement && oldElement);

  if (isExistElements && parentElement.contains(oldElement)) {
    const {scrollTop, scrollLeft} = oldElement;

    newElement.style.animationDuration = `0s`;
    parentElement.replaceChild(newElement, oldElement);

    newElement.scrollTop = scrollTop;
    newElement.scrollLeft = scrollLeft;
  }
};
