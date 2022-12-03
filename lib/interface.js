export class Interface {
  buildDetail(obj) {
    delete obj.total;
    let html = `<p>`;

    for (const [key, value] of Object.entries(obj)) {
      html += `${key} : ${value} <br/>`;
    }
    html += `</p>`;
    return html;
  }

  buildInterface(obj) {
    console.log(obj);
    let html = ` 
    <div
   
  >
    <table class="table"
        style="background:white; "
    >
    <thead class="thead-dark">
    <tr>
      <th scope="col">Categoria</th>
      <th scope="col">Total</th>
      <th scope="col">Desglose(si aplica)</th>
    </tr>
    </thead>
       `;

    for (const [key, value] of Object.entries(obj)) {
      console.log(`${key}: ${value.total}`);
      const totalHtml = `<th scope="row">${
        value.total != undefined ? value.total : value
      }</th>`;
      const detail = `
        <th scope="row">${
          value.total != undefined ? this.buildDetail(value) : "N/A."
        }</th>
      `;
      html += `<tr>
      <th scope="row">${key}</th>
        ${totalHtml}
        ${detail}
      </tr>`;
    }
    html += `</table><div/>`;
    return html;
  }
}
