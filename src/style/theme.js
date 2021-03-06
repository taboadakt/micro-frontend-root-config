import Colors, { ThemeTypes } from "./colors";

const baseUrl = "https://static.vciwifi.com/images";

export default {
  linkColor: Colors.Teal600,
  errorColor: Colors.Red,
  emptyColor: Colors.Gray400,
  successColor: Colors.Green400,
  checkboxFocusColor: Colors.Teal400,
  inputErrorBorderColor: Colors.Red,
  inputErrorBackgroundColor: Colors.LightRed,
  inputFocusBorderColor: Colors.Teal400,
  inputFocusBackgroundColor: Colors.LightTeal,
  primaryButtonColor: Colors.Teal500,
  primaryButtonHoverColor: Colors.Teal600,
  primaryButtonFocusColor: Colors.Teal600,
  primaryButtonActiveColor: Colors.Teal700,
  secondaryButtonColor: Colors.Gray500,
  secondaryButtonHoverColor: Colors.Gray600,
  secondaryButtonFocusColor: Colors.Gray600,
  secondaryButtonActiveColor: Colors.Gray700,
  destructiveButtonColor: Colors.Red500,
  destructiveButtonHoverColor: Colors.Red600,
  destructiveButtonFocusColor: Colors.Red600,
  destructiveButtonActiveColor: Colors.Red700,
  codeStatusColors: {
    active: Colors.Green400,
    completed: Colors.Teal500,
    generated: Colors.Gray400,
    canceled: Colors.Red,
    paused: Colors.Orange300, // Design to be finalized
    expired: Colors.Red,
    refunded: Colors.Red, // Design to be finalized
    inactive: Colors.Gray400,
  },
  spinner: {
    color1: Colors.Teal300,
    color2: Colors.Teal400,
    color3: Colors.Teal500,
    color4: Colors.Teal600,
  },
  header: {
    backgroundColor: Colors.White,
    borderWidth: "0",
    borderGradient: `linear-gradient(90deg, ${Colors.Blue700}, ${Colors.Teal500})`,
    borderTopStyle: "solid",
    borderTopWidth: "8px",
  },
  footer: {
    textColor: Colors.Gray400,
    backgroundColor: Colors.Gray700,
    borderWidth: "0",
    borderGradient: `linear-gradient(90deg, ${Colors.Blue700}, ${Colors.Teal500})`,
    borderTopStyle: "solid",
    borderTopWidth: "8px",
    languageSelectorTheme: ThemeTypes.Dark,
  },
  languageSelector: {
    lightBackgroundColor: Colors.White,
    lightColor: Colors.Gray700,
    lightBorderColor: Colors.Gray300,
    darkBackgroundColor: Colors.Gray600,
    darkColor: Colors.White,
  },
  plans: {
    fastColor: Colors.Blue500,
    slowColor: Colors.Green400,
  },
  launchpad: {
    plansColor: Colors.Purple400,
    plansHoverColor: Colors.Purple500,
    plansFocusColor: Colors.Purple500,
    plansActiveColor: Colors.Purple600,
    codesColor: Colors.Orange400,
    codesHoverColor: Colors.Orange500,
    codesFocusColor: Colors.Orange500,
    codesActiveColor: Colors.Orange600,
    salesColor: Colors.Blue400,
    salesHoverColor: Colors.Blue500,
    salesFocusColor: Colors.Blue500,
    salesActiveColor: Colors.Blue600,
    supportColor: Colors.Green400,
    supportHoverColor: Colors.Green500,
    supportFocusColor: Colors.Green500,
    supportActiveColor: Colors.Green600,
  },
  user: {
    languageSelectorTheme: ThemeTypes.Light,
  },
  images: {
    logo: {
      url: `${baseUrl}/Viasat.svg`,
      width: 90,
      height: 30,
    },
    captivePortalConnectingPage: {
      url: `${baseUrl}/ViasatColor.svg`,
      width: 90,
      height: 30,
    },
    captivePortalFooter: {
      url: `${baseUrl}/ViasatWhite.svg`,
      width: 90,
      height: 30,
    },
    pointOfSaleFooter: {
      url: `${baseUrl}/ViasatGray.svg`,
      width: 90,
      height: 30,
    },
  },
  gauge: {
    dataColor: Colors.Orange400,
    timeColor: Colors.Green400,
  },
};
