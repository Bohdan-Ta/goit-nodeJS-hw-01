const { program } = require("commander");
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();

// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");

const contactsOperation = require("./db");

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "getAll":
      const contacts = await contactsOperation.getAll();
      console.table(contacts);
      break;
    case "getById":
      const contact = await contactsOperation.getById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.table(contact);
      break;
    case "add":
      const newContact = await contactsOperation.add(data);
      console.table(newContact);
      break;
    case "updateById":
      const updateContact = await contactsOperation.updateById(id, data);
      if (!updateContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.table(updateContact);
      break;
    case "removeById":
      const removeContact = await contactsOperation.removeById(id);
      if (!removeContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.table(removeContact);
      break;
    default:
      console.log("Unknown ections");
  }
};

// const id = "3";
// const newData = {
//   name: "Mark robocop",
//   email: "polo@marco.com",
//   phone: "(333) 111-2233",
// };
// invokeAction({ action: "getAll" });
// invokeAction({ action: "getById", id });
// invokeAction({ action: "add", data: newData });

// const updateId = "10";
// const updataData = {
//   name: "Marko Ccichioni",
//   email: "marco@marco.com",
//   phone: "(888) 888-8888",
// };
// invokeProducts({ action: "updateById", id: updateId, data: updataData });

// invokeProducts({ action: "removeById", id: updateId });

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
invokeAction(argv);
