export default function TablePagination(props) {
    const { table } = props;
    const pageIndex = table.getState().pagination.pageIndex;
    const pageCount = table.getPageCount();
  
    return (
      <div className="flex items-center justify-center mt-4">
        <button
          className={`btn ${!table.getCanPreviousPage() ? 'disabled' : ''}`}
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className={`btn ${!table.getCanPreviousPage() ? 'disabled' : ''}`}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button className="btn" disabled>
          Page {pageIndex + 1} of {pageCount}
        </button>
        <button
          className={`btn ${!table.getCanNextPage() ? 'disabled' : ''}`}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className={`btn ${!table.getCanNextPage() ? 'disabled' : ''}`}
          onClick={() => table.setPageIndex(pageCount - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
      </div>
    );
  }
  