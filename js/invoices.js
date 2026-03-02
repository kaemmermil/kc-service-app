function loadInvoices(){

    let invoices = Storage.get("invoices");

    document.getElementById("app").innerHTML = `
    <div class="card">
        <h2>Rechnungen</h2>
        <button onclick="createInvoice()">Neue Rechnung</button>
        <div id="invoiceList"></div>
    </div>`;

    renderInvoices();
}

function createInvoice(){
    let invoices = Storage.get("invoices");

    invoices.push({
        number: Storage.generateNumber("R","invoiceCounter"),
        amount: 0,
        status: "offen",
        created: new Date()
    });

    Storage.set("invoices",invoices);
    renderInvoices();
}

function renderInvoices(){
    let invoices = Storage.get("invoices");
    let html="";
    invoices.forEach(r=>{
        html+=`<p>${r.number} – ${r.status}</p>`;
    });
    document.getElementById("invoiceList").innerHTML = html;
}
