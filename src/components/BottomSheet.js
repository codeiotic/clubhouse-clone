import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import style from "../style/BottomSheet.module.css";

const BottomSheet = ({
  sheetVisible,
  setSheetVisible,
  setItemsVisible,
  sheetTitle,
  cardDetail,
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
          backgroundColor: sheetTitle == "profile" ? "transparent" : "",
        }}
      ></div>
    </SwipeableBottomSheet>
  );
};

export default BottomSheet;
