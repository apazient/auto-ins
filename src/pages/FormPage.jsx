import { Card } from "@mui/material";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  ContainerSectionPage,
  PageContainerS,
  YellowButton,
} from "../style/Global.styled";
import OutletNavaigation from "../components/OutletNavigation/OutletNavigation";
import FormContacts from "../forms/FormContacts/FormContacts";
import { YellowButton } from "../style/Global.styled";

const FormPage = () => {
  const location = useLocation();

  return (
    <PageContainerS>
      <ContainerSectionPage component="section">
        <OutletNavaigation locationPath={location} />
        <div>FormPage</div>
        <Link
          state={{ from: location }}
          to={location.state?.from || "/prices"}
          style={{ color: "lime" }}
        >
          <YellowButton>goBack</YellowButton>
        </Link>
      </ContainerSectionPage>
    </PageContainerS>
  );
};

export default FormPage;
