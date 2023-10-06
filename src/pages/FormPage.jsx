import { Card } from "@mui/material";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  ContainerSectionPage,
  PageContainerS,
  YellowButton,
} from "../style/Global.styled";
import OutletNavaigation from "../components/OutletNavigation/OutletNavigation";
import FormContacts from "../forms/FormContacts/FormContacts";
import CardCompanySmall from "../components/CardCompanySmall/CardCompanySmall";
import { useState } from "react";

import companyForm from "../assets/mocapi/companyForm.json";

const FormPage = () => {
  const location = useLocation();
  const [company, _] = useState(companyForm);

  return (
    <PageContainerS>
      <ContainerSectionPage component="section">
        <OutletNavaigation locationPath={location} />
        <CardCompanySmall company={company} />
        <Link
          state={{ from: location }}
          to={location.state?.from || "/prices"}
          style={{ color: "lime" }}
        >
          <YellowButton>goBack</YellowButton>
        </Link>
      </ContainerSectionPage>
      <FormContacts />
    </PageContainerS>
  );
};

export default FormPage;
