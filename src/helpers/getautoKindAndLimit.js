export const getAutoKindAndLimit = (data) => {
  switch (data) {
    case "A1":
      return { autoKind: "MOTO", autoKindLimit: "300" };
    case "A2":
      return { autoKind: "MOTO", autoKindLimit: "301" };
    case "B1":
      return { autoKind: "CAR", autoKindLimit: "1600" };
    case "B2":
      return { autoKind: "CAR", autoKindLimit: "1601" };
    case "B3":
      return { autoKind: "CAR", autoKindLimit: "2001" };
    case "B4":
      return { autoKind: "CAR", autoKindLimit: "3001" };
    case "B5":
      return { autoKind: "CAR", autoKindLimit: "1600" };
    case "C1":
      return { autoKind: "FREIGHT ", autoKindLimit: "2000" };
    case "C2":
      return { autoKind: "FREIGHT ", autoKindLimit: "2001" };
    case "D1":
      return { autoKind: "PASSENGER ", autoKindLimit: "20" };
    case "D2":
      return { autoKind: "PASSENGER ", autoKindLimit: "21" };
    case "E":
      return { autoKind: "TRAILER ", autoKindLimit: "0" };
    case "F":
      return { autoKind: "TRAILER ", autoKindLimit: "0" };

    default:
      return "Not found";
  }
};
