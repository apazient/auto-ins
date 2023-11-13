export const findMakerByName = (name, allAutoMakers) => {
  return allAutoMakers?.find(
    (maker) => maker?.name.toUpperCase() === name.toUpperCase()
  );
};

export const findModelByName = (name, autoModelByMaker) => {
  return autoModelByMaker?.filter((model) => {
    return (
      model?.name.toUpperCase().replace(/\s/g, "").slice(0, 3) ===
      name.toUpperCase().replace(/\s/g, "").slice(0, 3)
    );
  });
};
