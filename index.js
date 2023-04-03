const contactServices = require("./contacts");

const argv = require("yargs").argv;

const invokeAction = async ({ action, id, email, phone, name }) => {
  switch (action) {
    case "list":
      const allContacts = await contactServices.listContacts();
      console.table(allContacts);
      break;

    case "get":
        const oneContact = await contactServices.getContactById(id);
        console.log(oneContact);
        break;

    case "add":
        const addedContact = await contactServices.addContact({name, phone, email});
        console.log(addedContact)
        break;

    case "remove":
        const deletedContact = await contactServices.removeContact(id)
        console.log(deletedContact)
        break;

    default:
        console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
