import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '../../hooks/useLocalStorage';
import s from './Filter.module.css';

export default function Filter() {
  const [filter, setFilter] = useLocalStorage('filter', '');

  const filterInputId = uuidv4();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'filter':
        setFilter(value);
        break;

      default:
        return;
    }
  };

  return (
    <div className={s.InputOverlay}>
      <label htmlFor={filterInputId} className={s.FilterLabel}>
        Find contacts by name
      </label>
      <input
        className={s.FilterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        id={filterInputId}
      ></input>
    </div>
  );
}
