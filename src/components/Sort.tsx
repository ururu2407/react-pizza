import React from "react";
import { useDispatch } from "react-redux";
import { Sort as ISort, sortPropertyEnum } from "../redux/filter/types";
import { setSort } from "../redux/filter/slice";

type SortList = {
  name: string;
  sortProperty: sortPropertyEnum;
};

type SortProps = {
  value: ISort;
};

const list: SortList[] = [
  { name: "popularity (DESC)", sortProperty: sortPropertyEnum.RATING_DESC },
  { name: "popularity (ASC)", sortProperty: sortPropertyEnum.RATING_ASC },
  { name: "price (DESC)", sortProperty: sortPropertyEnum.PRICE_DESC },
  { name: "price (ASC)", sortProperty: sortPropertyEnum.PRICE_ASC },
  { name: "alphabet (DESC)", sortProperty: sortPropertyEnum.TITLE_DESC },
  { name: "alphabet (ASC)", sortProperty: sortPropertyEnum.TITLE_ASC },
];

export const Sort: React.FC<SortProps> = React.memo(({ value }) => {
  const dispatch = useDispatch();
  const sortRef = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState(false);

  const onClickListItem = (obj: SortList) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const path = event.composedPath();

      if (sortRef.current && !path.includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: open ? "rotate(0deg)" : "rotate(180deg)",
            transition: "0.3s",
          }}
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by:</b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, index) => (
              <li
                onClick={() => onClickListItem(obj)}
                className={
                  value.sortProperty === obj.sortProperty ? "active" : ""
                }
                key={index}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});
