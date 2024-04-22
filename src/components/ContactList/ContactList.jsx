import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { getStatusFilter, selectContacts } from "../../redux/selector";

//filtered contacts which contain searchValue
const getVisibleContacts = (contacts, searchValue) => {
  console.log("contacts: ", contacts);
  const visibleContacts = contacts.filter(({ name }) => {
    console.log("name: ", name);
    console.log(
      "includes: ",
      name.toLowerCase().includes(searchValue.trim().toLowerCase())
    );
    return name.toLowerCase().includes(searchValue.trim().toLowerCase());
  });
  return visibleContacts;
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchValue = useSelector(getStatusFilter);
  console.log("searchValue: ", searchValue);
  const visibleContacts = getVisibleContacts(contacts, searchValue);
  // console.log("contacts: ", contacts);
  console.log("visibleContacts", visibleContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </ul>
  );
};

export default ContactList;
