import classNames from "classnames"

interface Props {
  getSortClass: (field: string) => "fa-sort-up" | "fa-sort-down" | "fa-sort",
  title: string
  handleSort: (field: string) => void
}

export const SortLink: React.FC<Props> = ({ getSortClass, title, handleSort }) => {
  return (
    <th onClick={() => handleSort(title)}>
      {title}
      <span className="icon">
        <i className={classNames(
            `fas ${getSortClass(title)}`
          )}
        />
      </span>
    </th>
  )
}

