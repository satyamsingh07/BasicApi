import {
  addNewContact,
  deleteContact,
  getContacts,
  getContactWithId,
  updateContact,
} from "../controllers/crmControler";

const routes = (app) => {
  app
    .route("/contact")
    // get all contacts
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)

    // post a new contact
    .post(addNewContact);

  app
    .route("/contact/:contactId")
    // get specific contact
    .get(getContactWithId)

    .put(updateContact)

    .delete(deleteContact);
};

export default routes;
