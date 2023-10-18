export const userNormalize = (user) => {
  return {
    userId: user.id,
    salePoint: user.salePoint.id,
    companyId: user.salePoint.company.id,
    companyType: user.salePoint.company.type,
  };
};
