const Storage = {

    get(key){
        return JSON.parse(localStorage.getItem(key) || "[]");
    },

    set(key,data){
        localStorage.setItem(key,JSON.stringify(data));
    },

    generateNumber(prefix,key){
        let counter = localStorage.getItem(key) || 1;
        let year = new Date().getFullYear();
        let number = year + "-" + prefix + "-" + String(counter).padStart(4,"0");
        localStorage.setItem(key, ++counter);
        return number;
    }

};
