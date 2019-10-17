const phoneService = require('../services/phoneService')

function phoneController() {

    async function getAllPhones(req, res) {
        try {
            const phonesList = await phoneService.getAllPhones()
            return res.status(200).json(phonesList)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
    
    return {
        getAllPhones,
    }
}

module.exports = phoneController();

