export const userNormalize = (user) => {
  return {
    user: { id: user.id },
    salePoint: {
      id: user.salePoint.id,
      company: {
        id: user.salePoint.company.id,
        type: user.salePoint.company.type,
      },
    },
  };
};
