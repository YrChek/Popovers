export default class Popover {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.list = [];
    this.createPopover = this.createPopover.bind(this);
    this.displayingElement = this.displayingElement.bind(this);
    this.addTheList = this.addTheList.bind(this);
    this.delElementList = this.delNameList.bind(this);
    this.removeElement = this.removeElement.bind(this);
    this.starting = this.starting.bind(this);
  }

  createPopover() {
    const text = this.triggerElement.dataset.descript;
    return `
      <div class="footnote">
        <div class="footnote-title">Кратко о фильме</div>
        <div class="footnote-text">${text}</div>
      </div>
    `;
  }

  displayingElement() {
    const html = this.createPopover();
    this.triggerElement.insertAdjacentHTML('beforebegin', html);
    const footnote = this.triggerElement.previousElementSibling;
    footnote.classList.add(this.id);
    const { top, left, width } = this.triggerElement.getBoundingClientRect();
    footnote.style.top = `${top - footnote.offsetHeight - 15 + window.pageYOffset}px`;
    footnote.style.left = `${left + width / 2 - footnote.offsetWidth / 2}px`;
  }

  addTheList() {
    this.list.push(this.id);
  }

  delNameList() {
    const name = this.list.indexOf(this.id);
    this.list.splice(name, 1);
  }

  removeElement() {
    const el = this.parentEl.querySelector(`.${this.id}`);
    el.remove();
  }

  starting(triggerElement, btn) {
    this.triggerElement = triggerElement;
    this.id = this.triggerElement.getAttribute('name');
    if (this.list.includes(this.id)) {
      this.removeElement();
      this.delNameList();
      btn.textContent = 'Показать';
    } else {
      this.addTheList();
      this.displayingElement();
      btn.textContent = 'Скрыть';
    }
  }
}
