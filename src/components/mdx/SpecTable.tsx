interface SpecTableProps {
  data: { label: string; value: string }[];
  title?: string;
}

export function SpecTable({ data, title }: SpecTableProps) {
  return (
    <div className="my-4 overflow-x-auto">
      {title && <h4 className="font-semibold mb-2">{title}</h4>}
      <table className="w-full text-sm border-collapse">
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-gray-50 dark:bg-gray-800/50" : ""}
            >
              <td className="px-3 py-2 font-medium text-muted w-1/3 border border-gray-200 dark:border-gray-700">
                {row.label}
              </td>
              <td className="px-3 py-2 border border-gray-200 dark:border-gray-700">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
