import { ChangeEvent, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import CustomImage from "../common/CustomImage"
// import { boolean } from "yup"

const InputBox = styled.input`
  background-image: url('/assets/images/icons/search.svg');
  background-position:  '12px 13px';
  background-size: 24px 24px;
  background-repeat: no-repeat;
  border-radius: 8px;
  border: 1px solid #DEE1E1;
  background: #FAFAFB;
  padding: 12px 20px;
  color: #55535B;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 14.327px; /* 143.272% */
  text-transform: uppercase;

  width: 100%;
  ::placeholder {
    color: rgba(85, 83, 91, 0.50);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  &:focus {
    border: 1px solid var(--primary-text, #33C4AC);
    background: #FAFAFB;
    outline: none;
  }
`

const SearchDefaultBox = styled.div`
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #DEE1E1;
  background: #FAFAFB;
  width: 100%;
  height: 40.31px;

  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 14.327px; /* 143.272% */
  text-transform: uppercase;
  color: rgba(85, 83, 91, 0.50);
`

const SelectBoxStyle = styled.div<ISearchableSelect>`
  max-width: ${(props) => props.width || '190px'};
  width: 100%;
  position: relative;
`

const SelectBody = styled.div`
  position: absolute;
  margin-top: 13px;
  width: 100%;
  padding: 8px 0;
  border-radius: 8px;
  border: 0.5px solid rgba(85, 83, 91, 0.10);

  background: #FFF;
  box-shadow: 0px 4px 30.3px 0px rgba(218, 218, 218, 0.25);
`

const SelectItem = styled.div`
  padding: 8px 16px;
  display: flex;
  padding: 8px 16px;
  align-items: center;

  color: var(--text, #18171C);
  /* Web/Body text | 16px | 500 */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; 
  cursor: pointer;
  &:hover{
    background-color: #ddd;
  }
  &:not(:last-child){
    border-bottom: 1px solid rgba(85, 83, 91, 0.10);
  }
`

interface ISearchableSelect {
  items?: any[];
  searchField?: string;
  width?: string;
  defaultItem?: string;
  setActive?: any;

}

const SearchableSelect = ({
  items,
  searchField,
  width,
  defaultItem,
  setActive,
  
}: ISearchableSelect) => {
  const [activeSelect, setActiveSelect] = useState<string>()
  const [isSearchable, setIsSearchable] = useState<boolean>(false)
  const [input, setInput] = useState<string>('')
  const [activeItems, setActiveItems] = useState<string[] | undefined>(items)

  const outerRef: any = useRef();

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (outerRef.current && !outerRef.current.contains(e.target)) {
        setActiveSelect(searchField)
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setActiveItems(items?.filter((item: string) => item.toLowerCase().includes(input.toLowerCase())));
  }, [input, items]);

  return (
    <SelectBoxStyle
      width={width}
      ref={outerRef}
    >
      {
        isSearchable
          ?
          <InputBox
            value={input}
            placeholder="Search"
            autoFocus={true}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInput(e.target.value);
            }}
            onFocus={() => {
              setActiveSelect('');
              setIsSearchable(true);
            }}
          />
          :
          <SearchDefaultBox onClick={() => setIsSearchable(true)}>
            <span>{activeSelect ? activeSelect : (searchField ? searchField : defaultItem)}</span>
            <CustomImage
              image="/assets/images/icons/arrow-down.svg"
            />
          </SearchDefaultBox>
      }
      {
        !activeSelect && activeSelect === '' && activeItems && activeItems.length > 0 && 
          <SelectBody>
            {
              activeItems.map((item: string, index: number) => {
                return (
                  <SelectItem key={index} onClick={() => {
                    console.log("item", item)
                    setIsSearchable(false)
                    setActiveSelect(item)
                    setActive(item)
                    setInput('')
                  }}>
                    {item}
                  </SelectItem>

                )
              })
            }
          </SelectBody>

      }
    </SelectBoxStyle>
  )
}

export default SearchableSelect