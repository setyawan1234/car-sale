import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
  } from "@tanstack/react-table";
  import TablePagination from "./pagination";
  
  export default function Table(props) {
    const { columns = [], datas = [] } = props;
  
    const table = useReactTable({
      data: datas,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });
  
    return (
      <div className="bg-gray-100 w-full p-4 text-center rounded-md my-6">
        <div className="overflow-x-auto w-full">
          <table className="table w-full" aria-label={props["aria-label"]}>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="bg-gray-700 text-white">
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        aria-label={`header-${header.id}`}
                        key={header.id}
                        colSpan={header.colSpan}
                        className="p-2"
                      >
                        {header.isPlaceholder ? null : (
                          <div>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </div>
                        )}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row, index) => {
                return (
                  <tr
                    aria-label="row"
                    className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
                    key={row.id}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td key={cell.id} className="p-2">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <TablePagination table={table} />
      </div>
    );
  }
  