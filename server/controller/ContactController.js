

const ContactController = {

    submitContactDetails: function (req, res, next) {
        const requestedData = req.body;
        console.log(requestedData);
        res.send("Contact details received successfully!");
    }
}

module.exports = ContactController;