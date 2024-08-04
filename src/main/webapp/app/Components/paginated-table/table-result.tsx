import '../paginated-table/table.scss';
import React, { useEffect } from 'react';
import { useTable, usePagination } from 'react-table';
import { connect } from 'react-redux';
import { getResultEntities } from '../../entities/candidate/candidate.reducer';

export interface ITableProp extends StateProps, DispatchProps {
  data: any;
  count: any;
  columns: any;
  searchUser: any;
}

const initialState = {
  queryPageIndex: 0,
  queryPageSize: 8,
  totalCount: null,
};

const PAGE_CHANGED = 'PAGE_CHANGED';
const PAGE_SIZE_CHANGED = 'PAGE_SIZE_CHANGED';
const TOTAL_COUNT_CHANGED = 'TOTAL_COUNT_CHANGED';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case PAGE_CHANGED:
      return {
        ...state,
        queryPageIndex: payload,
      };
    case PAGE_SIZE_CHANGED:
      return {
        ...state,
        queryPageSize: payload,
      };
    case TOTAL_COUNT_CHANGED:
      return {
        ...state,
        totalCount: payload,
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

const PaginatedTable = (props: ITableProp) => {
  const { data = [], columns, count } = props;
  const { searchUser } = props;
  const [{ queryPageIndex, queryPageSize, totalCount }, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    props.getResultEntities(queryPageIndex, queryPageSize, searchUser);
  }, [queryPageIndex, queryPageSize, searchUser]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: queryPageIndex,
        pageSize: queryPageSize,
      },
      manualPagination: true,
      pageCount: data ? Math.ceil(count / queryPageSize) : null,
    },
    usePagination
  );

  React.useEffect(() => {
    dispatch({ type: PAGE_CHANGED, payload: pageIndex });
  }, [pageIndex]);

  React.useEffect(() => {
    dispatch({ type: PAGE_SIZE_CHANGED, payload: pageSize });
    // gotoPage(0);
  }, [pageSize, gotoPage]);

  React.useEffect(() => {
    if (data?.count) {
      dispatch({
        type: TOTAL_COUNT_CHANGED,
        payload: data.count,
      });
    }
  }, [data?.count]);

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, l) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={l}>
              {headerGroup.headers.map((column, index) => (
                <th {...column.getHeaderProps()} key={index}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, j) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={j}>
                {row.cells.map((cell, k) => (
                  <td {...cell.getCellProps()} key={k}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <div style={{ width: '200px' }}>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>{' '}
        </div>
        <div>
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <span>
            | Go to page:{' '}
            <input
              type="number"
              value={pageIndex + 1}
              onChange={e => {
                const page1 = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page1);
              }}
              style={{ width: '100px' }}
            />
          </span>{' '}
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[8, 10, 20, 30, 40, 50].map(pageSize1 => (
              <option key={pageSize1} value={pageSize1}>
                Show {pageSize1}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ candidate }) => ({});

const mapDispatchToProps = {
  getResultEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PaginatedTable);
