module.exports = {
    age: function(timestamp) {
        const today = new Date();
        const birthDate = new Date(timestamp);
    
        // Ano: 2019 - 1985 = 34
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
    
        // Mês: 11 - 12 = -1
        // Mês: 11 - 11 = 0
        if (month < 0 ||
            month == 0 &&
            today.getDate() <= birthDate.getDate()) {
                age = age - 1;
        }
    
        return age;
    },

    date: function(timestamp) {
        const date = new Date(timestamp);

        const year = date.getUTCFullYear();
        const month = `0${date.getUTCMonth() + 1}`.slice(-2);
        const day = `0${date.getUTCDate()}`.slice(-2);

        return `${day}-${month}-${year}`;
    }
}