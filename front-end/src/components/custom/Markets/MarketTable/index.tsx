import { useMemo, useState } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useAsyncDebounce } from "react-table";
import styled from "styled-components";
import CustomSecondaryButton from "../../../common/CustomSecondaryButton";
import { NumberButton, PrevNextButton } from "../../../table";
import CustomSearchInput from "../../../common/CustomSearchInput";
import { FlexBox } from "../../../common/FlexBox";


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
    cursor: pointer;

    td{
      padding: 16px 16px;
      color: var(--Secondary, #18171C);
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; 
      &:nth-child(1){
        flex-direction: row;
        display: flex;
        gap: 10px;
        align-items: center;
        div{
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        span.symbol{
          color: var(--Secondary, #18171C);
          /* number */
          font-family: Aeroport;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 110%;
        }
        span.chain{
          padding: 4px 6px;
          border-radius: 4px;
          background: #ECECEC;
          color: var(--Secondary, #18171C);
          text-align: center;
          font-family: Raleway;
          font-size: 12px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          text-transform: uppercase;
        }
      }
    
      &:nth-child(7){
        div{
          display: flex;
          /* justify-content: end; */
          gap: 10px;
        }
      }
    }
  }
`




const COLUMNS = [

  {
    Header: "Pair",
    accessor: "pair",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Change(24h)",
    accessor: "change_in_price",
  },
  {
    Header: "Min(24h)",
    accessor: "low_24hr",
  },
  {
    Header: "Max(24h)",
    accessor: "high_24hr",
  },
  {
    Header: "Volume(24h)",
    accessor: "base_volume",
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

const MarketTable = ({ mockData }: {
  mockData: any
}) => {
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
                {/* <th>
                  <input
                    type="checkbox"
                  />
                </th> */}
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
                <th>
                  Action
                </th>
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
                <tr {...row.getRowProps()}
                  onClick={() => {
                    console.log("row.cells[0]", row.cells[0])
                    window.location.href = "/trade/" + row.cells[0].value.split("/")[0] + "_" + row.cells[0].value.split("/")[1]
                  }}
                >
                  {/* <td>
                    <input
                      type="checkbox"
                    />
                  </td> */}
                  <td {...row.cells[0].getCellProps()}>
                    {row.cells[0].render("Cell")}
                    {/* <CustomImage
                      image="/assets/images/icons/tokens/bitcoin.svg"
                      width="32px"
                      height="32px"
                    /> */}
                    {
                      /*
                  <div>
                    <span className="symbol">{row.cells[0].render("Cell")}</span>
                    
                      <span className="chain">
                      BITCOIN
                    </span>
                      
                  </div>
                  */
                    }
                  </td>
                  <td {...row.cells[1].getCellProps()}>{row.cells[1].render("Cell")}</td>
                  <td {...row.cells[2].getCellProps()}>{row.cells[2].render("Cell")}</td>
                  <td {...row.cells[3].getCellProps()}>{row.cells[3].render("Cell")}</td>
                  <td {...row.cells[4].getCellProps()}>{row.cells[4].render("Cell")}</td>
                  <td {...row.cells[5].getCellProps()}>{row.cells[5].render("Cell")}</td>
                  <td>
                    <div>
                      <CustomSecondaryButton
                        text="Details"
                      />
                      <CustomSecondaryButton
                        text="Trade"
                      />
                    </div>
                  </td>

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

export default MarketTable;