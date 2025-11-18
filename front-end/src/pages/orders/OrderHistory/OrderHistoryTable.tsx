import { useMemo, useState } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useAsyncDebounce } from "react-table";
import styled from "styled-components";
import { FlexBox } from "../../../components/common/FlexBox";
import CustomSearchInput from "../../../components/common/CustomSearchInput";
import { NumberButton, PrevNextButton } from "../../../components/table";
import { globalFonts } from "../../../constants/fonts.constant";
import CustomText from "../../../components/common/CustomText";

const TableStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
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
    height: 48px;
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
      &:nth-child(5){
        display: flex;
        /* justify-content: end; */
        gap: 10px;
      }
    }
  }
`

const SearchInput = styled.input`
  width: 100%;
  max-width: 289px;
  height: ${(props) => props.height ? props.height : '48px'};
  box-sizing: border-box !important;
  border: 1px solid rgba(208, 208, 208, 0.50);
  background: 'white';

  border-radius: 8px;
  font-family: ${globalFonts.Roboto};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.color || '#55535B'};
  padding: 14px 16px 14px 40px;
  background-image: url('/assets/images/icons/search.svg');
  background-position:  8px 8px;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  ::placeholder {
    color: #55535B;
  }
  &:focus {
    border: #45EFD2 1px solid;
    outline: none;
  }

  @media screen and (max-width: 550px) {
    height: 42px;
    font-size: 16px;
    line-height: 24px;
    background-size: 22px 22px;
    padding: 12px 12px 12px 48px !important;
    background-position: 14px 11px;
  }
`;


const COLUMNS = [
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Pair",
    accessor: "pair",
  },
  {
    Header: "Type",
    accessor: "type",
  },
  {
    Header: "Side",
    accessor: "side",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Size",
    accessor: "size",
  },
  {
    Header: "Executed Value",
    accessor: "executedValue",
  },
  {
    Header: "Fee",
    accessor: "fee",
  },
  {
    Header: "Status",
    accessor: "status",
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
const GlobalFilter = ({ globalFilter, setGlobalFilter, setIsHidden, isHidden }) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value: any) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <FlexBox justifyContent="space-between">
      {/* Search:{" "} */}
      <SearchInput
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search`}
      // style={{
      //   fontSize: "1.1rem",
      //   margin: "1rem 0",
      // }}
      />

      <FlexBox gap="10px" width="default" alignItems="center">
        <input type="checkbox"
          checked={isHidden}
          onChange={(e) => setIsHidden(e.target.checked)}
        />
        <CustomText
          text={`Hide assets < 1 USD`}
          fontFamily={globalFonts.Aeroport}
          color="#55535B"
          fontSize="16px"
          fontWeight="500"
          lineHeight="110%"
        />
      </FlexBox>
    </FlexBox>
  );
};


// @ts-ignore
const OrderHistoryTable = ({ mockData }) => {
  const columns = useMemo(() => COLUMNS, []); // memoize before adding to useTable hook
  const data = useMemo(() => [...mockData], [mockData]);

  // const isBalanceHidden: boolean = useAppSelector(state => state.auth.isBalanceHidden)

  // const [isHidden, setIsHidden] = useState<boolean>(false)

  // console.log("isHidden", isHidden)

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
      {/* <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} setIsHidden={setIsHidden} isHidden={isHidden} /> */}
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
                  <td {...row.cells[1].getCellProps()}>
                    {

                      row.cells[1].render("Cell")
                    }
                  </td>
                  <td {...row.cells[2].getCellProps()}>{row.cells[2].render("Cell")}</td>
                  <td {...row.cells[3].getCellProps()}>{row.cells[3].render("Cell")}</td>
                  <td {...row.cells[4].getCellProps()}>{row.cells[4].render("Cell")}</td>
                  <td {...row.cells[5].getCellProps()}>{row.cells[5].render("Cell")}</td>
                  <td {...row.cells[6].getCellProps()}>{row.cells[6].render("Cell")}</td>
                  <td {...row.cells[7].getCellProps()}>{row.cells[7].render("Cell")}</td>
                  {/* <td {...row.cells[7].getCellProps()}>{row.cells[7].render("Cell")}</td> */}

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

export default OrderHistoryTable;