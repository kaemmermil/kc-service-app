function loadCustomers(){

    let customers = Storage.get("customers");

    document.getElementById("app").innerHTML = `
    <div class="card">
        <h2>Kunden</h2>
        <input id="cName" placeholder="Name">
        <input id="cEmail" placeholder="E-Mail">
        <input id="cPhone" placeholder="Telefon">
        <button onclick="addCustomer()">Speichern</button>
        <hr>
        <div id="customerList"></div>
    </div>`;

    renderCustomers();
}

function addCustomer(){
    let customers = Storage.get("customers");

    customers.push({
        id: Date.now(),
        name: cName.value,
        email: cEmail.value,
        phone: cPhone.value
    });

    Storage.set("customers",customers);
    renderCustomers();
}

function renderCustomers(){
    let customers = Storage.get("customers");
    let html="";
    customers.forEach(c=>{
        html+=`<p>${c.name} – ${c.email}</p>`;
    });
    document.getElementById("customerList").innerHTML = html;
}
