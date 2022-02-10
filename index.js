// const { write } = require("fs");
// const fs = require("fs/promises");

// fs.readFile("files/text.txt", "utf8")
//   .then((data) => {
//     // const text = data.toString("utf-8");
//     console.log(data);
//   })
//   .catch((error) => console.log(error.massege));

// const fileOperation = async (filePath, action = "read", data = "") => {
//   switch (action) {
//     case "read":
//       const text = await fs.readFile(filePath, "utf-8");
//       console.log(text);
//       break;
//     case "add":
//       await fs.appendFile(filePath, data);
//       break;
//     case "replace":
//       await fs.writeFile(filePath, data);
//       break;
//     default:
//       console.log("action unknow");
//   }
// };

// // fileOperation("files/text.txt", "add", "\nWho tok the cocing from");
// // fileOperation("files/text.txt", "add", "\nI want to code");
// fileOperation("files/text.txt", "replace", "\nI want to code");

const productsOperation = require("./db");
/*
1. get ALL - productsOperation.getAll 
2. get 1  - productsOperation.getById
3. add good - productsOperation.add
4. update good - productsOperation.updateById
5. delete good - productsOperation.removeById 
*/
const invokeProducts = async ({ action, id, data }) => {
  switch (action) {
    case "getAll":
      const contacts = await productsOperation.getAll();
      console.table(contacts);
      break;
    case "getById":
      const contact = await productsOperation.getById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.table(contact);
      break;
    case "add":
      const newContact = await productsOperation.add(data);
      console.table(newContact);
      break;
    case "updataById":
      const updateContact = await productsOperation.updateById(id, data);
      if (!updateContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.table(updateContact);
    default:
      console.log("Unknown ections");
  }
};

// const id = "8";
// const newData = {
//   name: "Mark robocop",
//   email: "polo@marco.com",
//   phone: "(333) 111-2233",
// };
// invokeProducts({ action: "getAll" });
// invokeProducts({ action: "getById", id });
// invokeProducts({ action: "add", data: newData });

// const updateId = "3f117581-24b0-46e2-bdef-ecc2b3da0716";
// const updataData = {
//   name: "Marko Bruno",
//   email: "marco@marco.com",
//   phone: "(888) 888-8888",
// };
// invokeProducts({ action: "updateById", id: updateId, data: updataData });
