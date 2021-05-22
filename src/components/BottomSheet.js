import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import style from "../style/BottomSheet.module.css";
import StartRoom from "./bottom_sheets/StartRoom";

const BottomSheet = ({
  sheetVisible,
  setSheetVisible,
  setItemsVisible,
  sheetTitle,
  cardDetail,
  setSheetCreateRoom,
}) => {
  return (
    <SwipeableBottomSheet
      open={sheetVisible}
      onChange={() => {
        setSheetVisible(!sheetVisible);
        setItemsVisible(true);
      }}
      fullScreen={sheetTitle === "room-detail" ? true : false}
    >
      <div
        className={style.BottomSheetContainer}
        style={{
          backgroundColor: sheetTitle === "profile" ? "transparent" : "",
        }}
      >
        <StartRoom
          setSheetCreateRoom={setSheetCreateRoom}
          setSheetVisible={(item) => {
            setSheetVisible(item);
            setItemsVisible(true);
          }}
        />
      </div>
    </SwipeableBottomSheet>
  );
};

export default BottomSheet;
