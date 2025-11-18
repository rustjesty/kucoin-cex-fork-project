import { useDispatch } from "react-redux"
import { useAppSelector } from "../../hooks";
import CustomImage from "../common/CustomImage";
import { updateBalanceHidden } from "../../features/auth/authSlice";

const HideButton = () => {
  const dispatch = useDispatch();
  const isHidden: boolean = useAppSelector(state => state.auth.isBalanceHidden)
  return (
    <>
      {
        isHidden ?
          <CustomImage
            image="/assets/images/icons/eye.svg"
            onClick={() => {
              dispatch(updateBalanceHidden(false))
            }}
            cursor="pointer"
          />
          :
          <CustomImage
            image="/assets/images/icons/eye-hide.svg"
            onClick={() => {
              dispatch(updateBalanceHidden(true))
            }}
            cursor="pointer"
          />
      }
    </>
  )
}

export default HideButton