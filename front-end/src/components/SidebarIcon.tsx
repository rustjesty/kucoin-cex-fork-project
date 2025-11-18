import CustomImage from "./common/CustomImage";

interface ISidebarIcon {
  active: boolean;
  activeIcon: string;
  unactiveIcon: string;
}

const SidebarIcon = ({ active, activeIcon, unactiveIcon }: ISidebarIcon) => {
  return (
    <>
      {active ? (
        <CustomImage image={activeIcon} />
      ) : (
        <CustomImage image={unactiveIcon} />
      )}
    </>
  );
};

export default SidebarIcon;