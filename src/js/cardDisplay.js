export default function cardDisplay(parentEl, obj) {
  const nodes = `
  <div class="box">
    <div class="picture">
      <img src="${obj.picture}" alt="${obj.name}" class="img">
    </div>
    <div class="description">
      <table>
        <tr>
          <th class="title tr">${obj.title}</th>
        </tr>
        <tr>
          <th class="tr">${obj.passport}</td>
        </tr>
        <tr>
          <td class="td">${obj.director}</td>
        </tr>
        <tr>
          <td>${obj.actors}</td>
        </tr>
        <tr>
          <td>Рейтинг: ${obj.rating}</td>
        </tr>
      </table>
      <div class="divBtn" name="${obj.name}" data-descript="${obj.descript}">
        <button class="btn">Показать</button>
      </div>
    </div>
  </div>
  `;
  parentEl.insertAdjacentHTML('beforeend', nodes);
}
