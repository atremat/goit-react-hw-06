import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
import { LuUserMinus } from "react-icons/lu";
import { LiaUserEditSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    // onEditContact(contact);
    console.log("edit");
  };

  const { id, name, number } = contact;
  return (
    <li className={css.listItem}>
      <div className={css.leftWrapper}>
        <div className={css.nameWrapper}>
          <FaUser />
          <span className={css.name}>{name}</span>
        </div>
        <div className={css.numberWrapper}>
          <FaPhone />
          <span className={css.number}>{number}</span>
        </div>
      </div>
      <div className={css.btnWrapper}>
        <button
          className={css.btnDelete}
          onClick={() => dispatch(deleteContact(id))}
        >
          <LuUserMinus className={css.deleteIcon} />
          Delete
        </button>
        <button className={css.btnEdit} onClick={handleEdit}>
          <LiaUserEditSolid className={css.editIcon} />
          Edit
        </button>
      </div>
    </li>
  );
};

export default Contact;
