function loadModule(module){

    if(module==="dashboard"){
        document.getElementById("app").innerHTML = `
        <div class="card">
            <h2>Dashboard</h2>
            <p>Willkommen im K&C Service ERP System.</p>
        </div>`;
    }

    if(module==="customers") loadCustomers();
    if(module==="offers") loadOffers();
    if(module==="invoices") loadInvoices();
    if(module==="finance") loadFinance();
}

loadModule("dashboard");

function exportBackup(){
    let data = {
        customers: Storage.get("customers"),
        offers: Storage.get("offers"),
        invoices: Storage.get("invoices")
    };

    let blob = new Blob([JSON.stringify(data)], {type:"application/json"});
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "kc-service-backup.json";
    a.click();
}
