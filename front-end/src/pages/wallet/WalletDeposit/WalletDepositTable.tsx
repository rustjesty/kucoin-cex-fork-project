import { useMemo, useState } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useAsyncDebounce } from "react-table";

import styled from "styled-components";
import { FlexBox } from "../../../components/common/FlexBox";
import CustomSearchInput from "../../../components/common/CustomSearchInput";


const TableStyle = styled.div`
  width: 100%;
  table {
    border-spacing: 0;
    width: 100%;
    /* border: 1px solid #ededed; */
  }
  table tr:last-child td {
    border-bottom: 0;
  }
  .pagination{
    color: var(--Text, #55535B);
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    span{
      color: var(--Text, #55535B);
      text-align: center;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }
  select{
    color: var(--Secondary, #18171C);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; 
  }
`

const TableHead = styled.thead`
  padding: 10px 0px;
  border-top: 1px solid rgba(221, 221, 221, 0.50);
  border-bottom: 1px solid rgba(221, 221, 221, 0.50);
  background: rgba(221, 221, 221, 0.05);
  th{
    color: #55535B;
    /* number */
    font-family: Aeroport;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    padding: 10px 16px;
  }
`

const TableBody = styled.tbody`
  tr{
    padding: 16px 0;
    border-bottom: 1px solid rgba(221, 221, 221, 0.50);

    td{
      padding: 16px 16px;
      color: var(--Secondary, #18171C);
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; 
    }
  }
`


const PrevNextButton = styled.button`
  width: 16px;
  height: 16px;
  background-color: white;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NumberButton = styled.div`
  border: none;
  cursor: pointer;
  color: var(--Text, #55535B);
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  &.active{
    border-radius: 8px;
    background: var(--Text, #33C4AC);
    width: 32px;
    padding: 4px 11px 4px 12px;

    color: var(--White, #FFF);
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
`

const COLUMNS = [
  {
    Header: "Coin",
    accessor: "depositType",
  },
  {
    Header: "Time",
    accessor: "depositConfirmDate",
  },
  {
    Header: "Transaction Hash",
    accessor: "txnHash",
  },
  {
    Header: "Amount",
    accessor: "depositAmount",
  },
  {
    Header: "Deposit ID",
    accessor: "depositId",
  },
];


// @ts-ignore
const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      {/* Search:{" "} */}
      <CustomSearchInput
        placeholder="Search records..."
      />
      <input
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        placeholder={`Search records...`}
        style={{
          fontSize: "1.1rem",
          margin: "1rem 0",
        }}
      />
    </span>
  );
};

// @ts-ignore
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value: any) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search records...`}
        style={{
          fontSize: "1.1rem",
          margin: "1rem 0",
        }}
      />
    </span>
  );
};



// @ts-ignore
const WalletDepositTable = ({ mockData }) => {
  const columns = useMemo(() => COLUMNS, []); // memoize before adding to useTable hook
  const data = useMemo(() => [...mockData], [mockData]);

  // default column component
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows,
    prepareRow,
    // @ts-ignore
    setGlobalFilter,
    // @ts-ignore
    page,
    // @ts-ignore
    canPreviousPage,
    // @ts-ignore
    canNextPage,
    // @ts-ignore
    pageOptions,
    // @ts-ignore
    pageCount,
    // @ts-ignore
    gotoPage,
    // @ts-ignore
    nextPage,
    // @ts-ignore
    previousPage,
    // @ts-ignore
    setPageSize,
    // @ts-ignore
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns,
      data,
      // @ts-ignore
      defaultColumn,
    },

    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <TableStyle>
      {/* <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} /> */}
      {/* apply the table props */}
      <table {...getTableProps()}>
        <TableHead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup: any) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                <th>
                  <input
                    type="checkbox"
                  />
                </th>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column: any) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render("Header")}
                      <span>{column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}</span>
                      {/* <div>{column.canFilter ? column.render("Filter") : null}</div> */}
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </TableHead>
        {/* Apply the table body props */}
        <TableBody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            page.map((row: any) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  <td>
                    <input
                      type="checkbox"
                    />
                  </td>
                  <td {...row.cells[0].getCellProps()}>{row.cells[0].render("Cell")}</td>
                  <td {...row.cells[1].getCellProps()}>{row.cells[1].render("Cell")}</td>
                  <td {...row.cells[2].getCellProps()}>{row.cells[2].render("Cell")}</td>
                  <td {...row.cells[3].getCellProps()}>
                    {row.cells[3].render("Cell")}
                  </td>
                  <td {...row.cells[4].getCellProps()}>{row.cells[4].render("Cell")}</td>

                </tr>
              );
            })
          }
        </TableBody>
      </table>

      <div className="pagination" style={{ marginTop: "1rem" }}>
        <FlexBox gap="30px" alignItems="center" justifyContent="start">
          <PrevNextButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </PrevNextButton>{" "}
          <PrevNextButton onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </PrevNextButton>{" "}
          {
            new Array(pageOptions.length).fill("").map((item: string, index: number) => {
              return (
                <NumberButton
                  className={pageIndex === index ? 'active' : ''}
                  onClick={() => gotoPage(index)}
                >
                  {item}{index + 1}
                </NumberButton>
              )
            })
          }
          <PrevNextButton onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </PrevNextButton>{" "}
          <PrevNextButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {">>"}
          </PrevNextButton>{" "}
          <span>
            Page{" "}

            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                console.log("here page...", page)
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </FlexBox>

      </div>
    </TableStyle>
  );
};

export default WalletDepositTable;