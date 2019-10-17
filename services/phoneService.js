const phonesJson = require('../data/phones')

function phoneService() {

    async function getAllPhones() {
        try {
            const phoneList = await phonesJson
            return phoneList
        } catch (error) {
            throw new Error("Couldn't find the Phones you're looking for") 
        }
    }

    return {
        getAllPhones,
    }
}

module.exports = phoneService();