function loadFinance(){

    let invoices = Storage.get("invoices");

    let total = 0;
    invoices.forEach(i=>{
        total += i.amount || 0;
    });

    document.getElementById("app").innerHTML = `
    <div class="card">
        <h2>Finanzübersicht</h2>
        <p>Gesamtumsatz: ${total.toFixed(2)} €</p>
    </div>`;
}
