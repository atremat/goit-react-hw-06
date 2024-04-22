import { useId } from "react";
import css from "./SearchBox.module.css";
import { TbUserSearch } from "react-icons/tb";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const searchValueId = useId();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <label htmlFor="searchValueId" className={css.label}>
        <TbUserSearch className={css.searchIcon} />
        Find contacts by name
      </label>
      <input
        type="text"
        onChange={handleChange}
        id={searchValueId}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
